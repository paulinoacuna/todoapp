//import './App.css';
import React from "react"
import { AppUI } from "./AppUI";
import {TodoProvider} from "../TodoContext"


/*
  const defaultTodos = [
    {text: "Cortar cebolla", complete: false},
    {text: "Sacar al perro", complete: false},
    {text: "Llorar en la lloreria", complete: true}
  ]
*/

//NOTAS
//{props.children}
//{props.saludo}
//React.useState
//react.useEffect: ejecuta la función enviada justo antes de hacer render completo de este componente 
//<React.Fragment> etiqueta invisible, no afecta interfaz o divs, amigable con css
//React Context useContext , Provider Consumer.
//React Portals

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    );
}

export default App;