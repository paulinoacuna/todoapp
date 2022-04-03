import React from "react"
import "./CreateTodoButton.css"

function CreateTodoButton(params) {

    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
        <button className="CreateTodoButton"
                onClick={() => {onClickButton("mensajito")}}>+</button>
    );
}

export { CreateTodoButton };