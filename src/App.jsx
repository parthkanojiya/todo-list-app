import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = window.localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id ? { ...t, todo } : t
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([
        { id: `${crypto.randomUUID()}`, todo, completed: false },
        ...todos,
      ]);
      setTodo("");
    }
  };

  // Delete a todo item
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };

  // Edit a todo item
  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  // Toggle todo completion status
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">todos</h1>
        <section className="todoapp">
          <TodoForm
            todo={todo}
            setTodo={setTodo}
            handleSubmit={handleSubmit}
            editId={editId}
          />
          <TodoList
            todos={filteredTodos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </section>
        <footer>
          <div className="footer-content">
            <span className="pending-items">
              {todos.filter((todo) => !todo.completed).length} items left
            </span>
            <div className="filters">
              <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={filter === "active" ? "active" : ""}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
