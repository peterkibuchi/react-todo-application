import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000}
    ]);

    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input className="todo-input" onChange={inputTextHandler} type="text" value={inputText} />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select className="filter-todo" onChange={statusHandler} name="todos">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
