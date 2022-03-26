import React from "react"
import "./styles/TodoItem.css"

function TodoItem(props) {
    return (
        <li className="TodoItem">
            
            <span className="complete">✓</span>
           
            <p>{props.text}</p>
            <span className="delete">X</span>
        </li>
    );
}

export { TodoItem };