import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import "./EditForm.css";

function EditForm({ todo, updateTodo, cancelEdit }) {
  const [editedText, setEditedText] = useState(todo.text);

  function handleTextChange(e) {
    setEditedText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateTodo(todo.id, editedText);
  }

  return (
    <form onSubmit={handleSubmit} className="edit-todo">
      <input
        type="text"
        name="editTodo"
        placeholder="Edit todo"
        value={editedText}
        onChange={handleTextChange}
        className="todo-input"
      />
      <button type="submit" className="btn-icon" id="icon-check">
        <AiOutlineCheckCircle />
      </button>
      <button onClick={cancelEdit} className="btn-icon" id="icon-cancel">
        <AiOutlineCloseCircle />
      </button>
    </form>
  );
}

export default EditForm;
