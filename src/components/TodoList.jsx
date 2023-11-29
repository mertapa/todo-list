import React from 'react'
import Todo from './Todo'

const TodoList = (todos, setTodos) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
    
      {todos.todos.map((todo) => (
        <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} completed={todo.completed} todo={todo} />
      ))}


       
      </ul>
    </div>
  )
}

export default TodoList
