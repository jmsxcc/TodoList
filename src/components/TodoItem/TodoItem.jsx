import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./TodoItem.css";

function TodoItem({ todo, editTodo, deleteTodo, toggleComplete }) {
  const completedStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    cursor: "pointer",
  };

  return (
    <li className={`todo-list ${todo.completed ? "completed" : ""}`}>
      <span
        onClick={() => toggleComplete(todo.id)}
        className="todo-text"
        style={completedStyle}
      >
        {todo.text}
      </span>
      <div className="btn-icon">
        <button
          onClick={() => editTodo(todo)}
          className="btn-icon"
          id="icon-edit"
        >
          <BiEdit />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn-icon"
          id="icon-delete"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
