import React, {useState, useEffect} from 'react';
import './App.css';

//components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Filter from './components/Filter'

function App() {
  const subtitle = "Create your To-Do List";
  const [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  //use effect
  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => { 
      saveDataToLocal(); 
      filterHandler(); 
  }, [todos, status]);

   const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFiltered(todos.filter(todo => todo.completed === true));
                break;
            case 'active':
                setFiltered(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFiltered(todos);
                break;
        }
    };

  const saveDataToLocal = () => {
    if(todos.length > 0)
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalData = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos")); 
      setTodos(localTodos);
    }
  }

  return (
    <div>
      <Header text={subtitle} />
      <Form inputTxt={inputTxt} setInputTxt={setInputTxt} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered}/>
      <Filter todos={todos} status={status} setStatus={setStatus} filtered={filtered} setFiltered={setFiltered} />
    </div>
  );
}

export default App; 