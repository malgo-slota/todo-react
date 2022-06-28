import React from 'react';
import './App.css';

//components
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  //js code here: functions, variables, 
  const subtitle = "learning props";

  return (
    <div>
      <Header text={subtitle} />
      <TodoList />
    </div>
  );
}

export default App;
