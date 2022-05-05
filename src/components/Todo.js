import React from 'react';

const Todo = ({text}) => {
    //Events
    const deleteHandler = () => {

    }

    return(
        <div class="todo">
            <li name="todo-item">{text}</li>
            <button class="complete-btn"><i class="fas fa-check"></i></button>
            <button class="trash-btn"><i class="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo; 