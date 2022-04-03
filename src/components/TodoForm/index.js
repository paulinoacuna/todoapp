import React from 'react'
import { TodoContext } from '../TodoContext'

function TodoForm(){

    const [newTodoText,setNewTodoText] = React.useState('')
    
    const value = React.useContext(TodoContext)

const onChange = (event) => {
    setNewTodoText(event.target.value)
}


const onCancel = () => {
    value.setModalActive(false)
}


const onSubmit = (event) => {

    event.preventDefault()
    value.onAddTodo(newTodoText)
    value.setModalActive(false)
}

    return(
        <form className='Modal' onSubmit={onSubmit}>
           <div className='Modal-box'>
                <p>Ingresa una tarea pendiente</p>
                <br />

                <textarea name="inputTodo" id="inputTodo" cols="30" rows="10"
                          value={newTodoText}
                          onChange={onChange}
                          placeholder='Comprar los viveres a las 6:00pm'>
                      
                </textarea>

                <div>
                    <button type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button type="submit">
                        Agregar
                    </button>
                </div>
            </div>
                
        </form>
    );
}

export {TodoForm}