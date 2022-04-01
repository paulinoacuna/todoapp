import React from "react"
import "./styles/TodoItem.css"

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Ya completase el todo: ' + props.text)

    //     // props.complete = true
    // }

    const onDelete = () => {
        alert('Borraste el todo: ' + props.text)

    }


    return (
        <li className="TodoItem">
            
            <span className={`complete ${props.complete && 'complete--active'}`}
                  onClick={props.onComplete}
            >✓</span>

            <p className={`parraph ${props.complete && 'parraph--active'}`}>{props.text}</p>
            
            <span className={`delete ${props.delete && 'delete--active'}`}
                  onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };