import React from "react";

const Todo = ({ text, todos,setTodos, key, todo, completed }) => {
  const deletehandler = () => {
    todos.setTodos(todos.todos.filter((el) => el.id !== todo.id))
  };
  const complatehandler =() => {
    todos.setTodos(todos.todos.map((item) => {
      if (item.id === todo.id){
        return{
          ...item , completed: !item.completed
        }
      }
      return item;
      
    } ))
  }
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}` }>
      <button className="complete-btn " onClick={complatehandler}>
        <i className="fas fa-check-circle"></i>
      </button>
      <li className="todo-item">{text}</li>
      <button className="trash-btn" onClick={deletehandler}>
        <i className="fa fa-minus-circle" ></i>
      </button>
    </div>
  );
};

export default Todo;
