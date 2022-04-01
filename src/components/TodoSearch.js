import React from "react"
import "./styles/TodoSearch.css"

// USO DEL ESTADO

function TodoSearch({searchValue,setSearchValue}) {
    const [] = React.useState('')
    

    const onSearchValueChange = (entrada) => {
        //captura la entrada en la barra de busqueda y la guarda en el hook de estado.
        setSearchValue(entrada.target.value)
    }

    return (
        <input className="TodoSearch"
               placeholder="Hacer la compra.."
               value={searchValue}
               onChange={onSearchValueChange}/> 
    );
}

export {TodoSearch};