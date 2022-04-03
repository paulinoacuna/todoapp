//import './App.css';
import React from "react"
import { AppUI } from "./AppUI";


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
//React provider

function useLocalStorage(itemKey,initialValue){

  //render states

  const [error,setError] = React.useState(false)
  const [loading,setLoading] = React.useState(true)
  const [item,setItem] = React.useState(initialValue);

  //simulacion time request API con useEffect
  React.useEffect(()=>{
    setTimeout(() => {
      
      try {
        const localStorageItem = localStorage.getItem(itemKey)
        let parsedItem

        //read
        if(!localStorageItem){
          localStorage.setItem(itemKey,JSON.stringify(initialValue))
          parsedItem = initialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)

      } catch (error) {
        setError(error)
      }

    }, 1500);
  },[])


    //save
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemKey,stringifiedItem)
  
        setItem(newItem)
      } catch (error) {
        setError(error)
      }
      
    }

    return {item,saveItem,loading,error}
}


function App() {

//lectura API (read)
const {item: todos,
       saveItem: saveTodos,
       loading,
       error} = useLocalStorage('TODOS_V1',[]);


//creacion de estado para barra busqueda
  const [searchValue,setSearchValue] = React.useState('');
  

//contador de Todos
  const completedTodos = todos.filter( todo => todo.complete == true ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {

    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()

    return todoText.includes(searchText)
  })

  //completar todos

  const onCompleteTodo = (text) => {
    
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[index].complete = true

    saveTodos(newTodos)
  }


  //borrar todos

  const onDeleteTodo = (text) => {
    
    const index = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(index,1)

    saveTodos(newTodos)
  }



  return (
    <AppUI 
      loading={loading}
      error={error}


      totalTodos={totalTodos}
      completedTodos={completedTodos}

      searchValue={searchValue}
      setSearchValue={setSearchValue}
    
      searchedTodos={searchedTodos}

      onCompleteTodo={onCompleteTodo}
      onDeleteTodo={onDeleteTodo}
    />
  );
}

export default App;