import React from "react"
import "./styles/TodoCounter.css" ;




function TodoCounter ({completedTodos,totalTodos}) {
    return (
        <h2 className="TodoCounter"> Has completado {completedTodos} tareas de {totalTodos}</h2>
    );
}

// export nombrados, evita equivocarse de componente
export {TodoCounter};