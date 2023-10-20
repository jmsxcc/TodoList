import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() !== "") {
      addTodo(todo.trim());
      setTodo("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        name="todo"
        placeholder="Create new todo"
        value={todo}
        onChange={handleChange}
        className="todo-input"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
