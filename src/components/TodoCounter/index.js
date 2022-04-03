import React from "react"
import { TodoContext } from "../TodoContext";

import "./TodoCounter.css" ;




function TodoCounter () {
const value = React.useContext(TodoContext)


    return (
        <h2 className="TodoCounter"> Has completado {value.completedTodos} tareas de {value.totalTodos}</h2>
    );
}

// export nombrados, evita equivocarse de componente
export {TodoCounter};