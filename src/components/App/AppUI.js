import React from 'react'

import {TodoContext} from '../TodoContext'

import {TodoCounter} from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { CreateTodoButton } from "../CreateTodoButton"
import { TodoForm } from '../TodoForm'

import {Modal} from '../Modal'
import '../Modal/Modal.css'



function AppUI(){
  const value = React.useContext(TodoContext)

    return (

        <React.Fragment> 
    
          <TodoCounter/>
          
          <TodoSearch/>
          
          <TodoList>

            {value.error && <p>Ha ocurrido un error :/ ${value.error}</p>}
            {value.loading && <p>Now loading...</p>}
            {(!value.loading && !value.searchedTodos.length) && <p>No tienes tareas pendientes :)</p>}

            {value.searchedTodos.map(todo => (
              <TodoItem key={todo.text}
                        text={todo.text}
                        complete={todo.complete}
                        onComplete={() => value.onCompleteTodo(todo.text)}
                        onDelete={() => value.onDeleteTodo(todo.text)}/>
             ))}
          </TodoList>

          {!!value.modalActive &&
             <Modal>
                <TodoForm/>
            </Modal>
          }
           <CreateTodoButton/>
          
    
        </React.Fragment>
    
      );
}

export {AppUI}