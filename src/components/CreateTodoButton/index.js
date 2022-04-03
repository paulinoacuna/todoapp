import React from "react"
import "./CreateTodoButton.css"
import { TodoContext } from "../TodoContext"

function CreateTodoButton() {
    const value = React.useContext(TodoContext)

    const onClickButton = () => {
        value.setModalActive(prevState=>!prevState) //toggle
     }

    return (
        <button className="CreateTodoButton"
                onClick={onClickButton}>+</button>
    );
}

export { CreateTodoButton };