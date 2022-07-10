import React from 'react'
import { useState,useEfect } from 'react'
import Todo from './Todo'


function TodoList({todos,setTodos,status,setStatus}) {

  return (
    <div className='todo-list'>
      <box> 
      <ul className='todo-list'>
            {todos.map((todo)=>(
                <Todo 
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id} 
                  text={todo.text}
                  date1={todo.date1}
                  date2={todo.date2}
                  status={status}
                  setStatus={setStatus}
                  todo={todo} 
                  id={todo.id}/>
            ))}
        </ul>
      </box> 
    </div>
  )
}

export default TodoList
