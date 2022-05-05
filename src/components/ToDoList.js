import React from 'react';
// Import Components
import Todo from './Todo'

const ToDoList = ({ todos, setTodos }) => {
    return(
        <div class="todo-container">
            <ul class="todo-list">
                {todos.map((todo) => (
                     <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList; 