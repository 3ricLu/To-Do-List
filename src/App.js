import React, { useState } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  // The todos state is here because it is used in both ToDoList.js as well as Form.js
  // You can only pass it downwards 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form inputText ={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList todos={todos}/>
    </div>
    
  );
}

export default App;
