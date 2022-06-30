import React from 'react';
import './App.css';

//components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //js code here: functions, variables etc.
  const subtitle = "Create your To-Do List";

  return (
    <div>
      <Header text={subtitle} />
      <Form />
      <TodoList />
    </div>
  );
}

export default App; 