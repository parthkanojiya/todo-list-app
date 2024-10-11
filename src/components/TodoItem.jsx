import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function TodoItem({ todo, handleEdit, handleDelete }) {
  return (
    <li className="singleTodo">
      <span className="todoText">{todo.todo}</span>
      <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
        <FaEdit />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        <MdDelete />
      </button>
    </li>
  );
}
