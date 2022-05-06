import React from "react";

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
    // Here I can write JS code and functions
    const inputTextHandler = (e) => {
        // e is an event
        // target is the input, but putting .value, we can obtain the input value 
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000},
        ]);
        setInputText('');
    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }

    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" class="todo-input" />
        <button onClick={submitToDoHandler} class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select onChange={statusHandler} name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;