import React from "react"

export default function Button(props) {
    return (
        <div className="button" onClick={props.func}>
            <h1>{props.icon}</h1>
        </div>
    )
}