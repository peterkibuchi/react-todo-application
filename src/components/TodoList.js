import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, status }) => {
  let todoList;

  switch (status) {
    case "complete":
      todoList = todos.filter(todo => todo.completed === true);
      break;
    case "incomplete":
      todoList = todos.filter(todo => todo.completed === false);
      break;
    default:
      todoList = todos;
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          todoList.map(todo => {
            return (
              <Todo
                key={todo.id} text={todo.text}
                todo={todo} todos={todos} setTodos={setTodos}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export default TodoList;