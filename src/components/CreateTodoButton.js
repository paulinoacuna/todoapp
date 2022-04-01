import React from "react"
import "./styles/CreateTodoButton.css"

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