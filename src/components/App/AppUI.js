import React from 'react'

import {TodoCounter} from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { CreateTodoButton } from "../CreateTodoButton"



function AppUI(props){


    
    return (

        <React.Fragment> 
    
          <TodoCounter
            completedTodos={props.completedTodos}
            totalTodos={props.totalTodos}/>
          
          <TodoSearch
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}/>
          
           <TodoList>

            {props.error && <p>Ha ocurrido un error :/ ${props.error}</p>}
            {props.loading && <p>Now loading...</p>}
            {(!props.loading && !props.searchedTodos.length) && <p>No tienes tareas pendientes :)</p>}



            {props.searchedTodos.map(todo => (
               <TodoItem key={todo.text}
                         text={todo.text}
                         complete={todo.complete}
                         onComplete={() => props.onCompleteTodo(todo.text)}
                         onDelete={() => props.onDeleteTodo(todo.text)}/>
            ))}
           </TodoList>
    
           <CreateTodoButton/>
          
    
        </React.Fragment>
    
      );
}

export {AppUI}