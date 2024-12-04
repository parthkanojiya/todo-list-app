import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleEdit,
  handleDelete,
  handleToggle,
}) {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}
