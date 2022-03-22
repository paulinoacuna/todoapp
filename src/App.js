//import './App.css';
import React from "react"
import {TodoCounter} from "./components/TodoCounter"
import { TodoSearch } from "./components/TodoSearch"
import { TodoList } from "./components/TodoList"
import { TodoItem } from "./components/TodoItem"
import { CreateTodoButton } from "./components/CreateTodoButton"


const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "sacar al perro", completed: false},
  {text: "Llorar en la lloreria", completed: false}
]

//{props.children}
//{props.saludo}
//<React.Fragment> etiqueta invisible, no afecta interfaz o divs, amigable con css


//gitconn 


function App() {
  return (

    <React.Fragment> 

      <TodoCounter/>
      
      <TodoSearch/>
      


       <TodoList>
        {todos.map(todo => (
           <TodoItem key={todo.text} text={todo.text}/>
        ))}
       </TodoList>

       <CreateTodoButton/>
      

    </React.Fragment>

  );
}

export default App;
