import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
        // Filter goes through all the list items 
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return(
        <div class="todo">
            <li name="todo-item">{text}</li>
            <button class="complete-btn"><i class="fas fa-check"></i></button>
            <button onClick={deleteHandler} class="trash-btn"><i class="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo; 