import React from "react";

export default function TodoForm({ todo, setTodo, handleSubmit, editId }) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit" className="sbmt-btn">
        {editId ? "Edit" : "Go"}
      </button>
    </form>
  );
}
