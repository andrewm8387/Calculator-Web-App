import React from "react"

import './styles/App.css';
import './styles/Output.css';

import Output from "./components/Output";
import Button from "./components/Button";

function App() {

    const icons = [
        {
            icon :"+",
        },
        {
            icon :"−",
        },
        {
            icon :"×",
        },
        {
            icon :"/",
        },
        {
            icon :"1",
        },
        {
            icon :"2",
        },
        {
            icon :"3",
        },
        {
            icon :"←",
        },
        {
            icon :"4",
        },
        {
            icon :"5",
        },
        {
            icon :"6",
        },
        {
            icon :"C",
        }
        , {
            icon :"7",
        }
        , {
            icon :"8",
        },
        {
            icon :"9",
        },
        {
            icon :".",
        },
        {
            icon :"=",
        },
        {
            icon :"0",
        }];

    const [output, setOutput] = React.useState("")

    function modifyOutput(char) {
        switch (char) {
            case "C":
                setOutput("")
                break
            case "←":
                setOutput(prevState => prevState.toString().slice(0, -1))
                break
            case "=":
                setOutput(prevState => {
                    try {
                        return eval(prevState.toString().replace("×","*").replace("−","-"))
                    } catch (e) {
                        return "Error"
                    }
                })
                break
            default:
                setOutput(prevState => (prevState + char))
        }
    }

    return (
      <main className="calculator">
        <Output output={output}/>
          <div className="buttons">
              {icons.map((icon) => (<Button icon={icon.icon} func={() => modifyOutput(icon.icon)}/>))}
          </div>
          
      </main>
    );
}

export default App;
