import './styles/App.css';
import './styles/Output.css';

import Output from "./components/Output";

function App() {
  return (
      <main className="calculator">
        <Output output={0}/>
      </main>
  );
}

export default App;
