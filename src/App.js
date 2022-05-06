import React, { useState, useEffect } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  // The todos state is here because it is used in both ToDoList.js as well as Form.js
  // You can only pass it downwards 
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    //RUN ONCE when the app starts
    useEffect(() => {
      getLocalTodos();
    }, []);

  // Use Effect
  // Every time a state changes, it can update the screen
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  // Filter function
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form 
        inputText ={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <ToDoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
    
  );
}

export default App;
