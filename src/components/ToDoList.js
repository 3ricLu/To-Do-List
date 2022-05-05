import React from 'react';
//Import Components
import Todo from './Todo';

const ToDoList = ({todos}) => {
    return(
        <div class="todo-container">
            <ul class="todo-list">
                {todos.map(todo => (
                    <Todo key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    )
};

export default ToDoList; 