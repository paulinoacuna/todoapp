import React from "react"
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

function TodoSearch() {
    
    const value = React.useContext(TodoContext)
    
    const onSearchValueChange = (entrada) => {
        //captura la entrada en la barra de busqueda y la guarda en el hook de estado.
        value.setSearchValue(entrada.target.value)
    }

    return (
        <input className="TodoSearch"
               placeholder="Hacer la compra.."
               value={value.searchValue}
               onChange={onSearchValueChange}/> 
    );
}

export {TodoSearch};