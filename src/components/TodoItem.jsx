import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function TodoItem({
  todo,
  handleEdit,
  handleDelete,
  handleToggle,
}) {
  return (
    <li className="singleTodo">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todoText ${todo.completed ? "completed" : ""}`}>
        {todo.todo}
      </span>
      <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
        <FaEdit />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        <MdDelete />
      </button>
    </li>
  );
}
