import React from 'react'
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext()

//<TodoContext.Provider></TodoContext.Provider>
//<TodoContext.Consumer></TodoContext.Consumer>


function TodoProvider(props){

    //lectura API (read)
    const {item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1',[]);


    //creacion de estados
    const [searchValue,setSearchValue] = React.useState('');
    const [modalActive,setModalActive] = React.useState(false);


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

    //guardar todos
    const onAddTodo = (text) => {
        const newTodos = [...todos]

        newTodos.push(
            {
                text: text,
                complete: false
            }
        )

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
        <TodoContext.Provider value={{
            loading,
            error,

            totalTodos,
            completedTodos,

            modalActive,
            setModalActive,

            searchValue,
            setSearchValue,
            searchedTodos,

            onCompleteTodo,
            onDeleteTodo,
            onAddTodo
        }}>
           {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext,TodoProvider}