//import './App.css';
import React from "react"
import {TodoCounter} from "./components/TodoCounter"
import { TodoSearch } from "./components/TodoSearch"
import { TodoList } from "./components/TodoList"
import { TodoItem } from "./components/TodoItem"
import { CreateTodoButton } from "./components/CreateTodoButton"


const defaultTodos = [
  {text: "Cortar cebolla", complete: false},
  {text: "Sacar al perro", complete: false},
  {text: "Llorar en la lloreria", complete: true}
]

//{props.children}
//{props.saludo}
//<React.Fragment> etiqueta invisible, no afecta interfaz o divs, amigable con css



function App() {
  
//creacion de estados
  const [searchValue,setSearchValue] = React.useState('');
  
  const [todos,setTodos] = React.useState(defaultTodos);

//contar Todos
  const completedTodos = todos.filter( todo => todo.complete == true ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {
    
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()

    //todo.text.match(searchValue)

    // return todoText.match(searchText)
    return todoText.includes(searchText)
  })


  //completar todos

  const onCompleteTodo = (text) => {
    
    const index = todos.findIndex(todo => todo.text === text)
    
    const newTodos = [...todos]

    newTodos[index].complete = true

    setTodos(newTodos)

  }


  //borrar todos

  const onDeleteTodo = (text) => {
    
    const index = todos.findIndex(todo => todo.text === text)
    
    const newTodos = [...todos]

    newTodos.splice(index,1)

    setTodos(newTodos)

  }

  


  return (

    <React.Fragment> 

      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}/>
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      
       <TodoList>
        {searchedTodos.map(todo => (
           <TodoItem key={todo.text}
                     text={todo.text}
                     complete={todo.complete}
                     onComplete={() => onCompleteTodo(todo.text)}
                     onDelete={() => onDeleteTodo(todo.text)}/>
        ))}
       </TodoList>

       <CreateTodoButton/>
      

    </React.Fragment>

  );
}

export default App;
