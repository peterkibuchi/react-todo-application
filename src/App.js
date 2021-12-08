import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  // Runs ONCE when the app first renders
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  // Retrieving Todos to Local Storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    }
  }

  // Saving Todos to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="App">
      <header>
        <h1>Peter's Todo List</h1>
      </header>

      <Form
        inputText={inputText} setInputText={setInputText}
        todos={todos} setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList todos={todos} setTodos={setTodos} status={status} />
    </div>
  );
}

export default App;