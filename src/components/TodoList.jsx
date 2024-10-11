import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
