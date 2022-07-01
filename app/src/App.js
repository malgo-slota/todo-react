import React, {useState} from 'react';
import './App.css';

//components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const subtitle = "Create your To-Do List";
  const [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header text={subtitle} />
      <Form inputTxt={inputTxt} setInputTxt={setInputTxt} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App; 