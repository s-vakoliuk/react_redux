import React from 'react';
import {useDispatch} from "react-redux";

import  {toggleCompletedTodo, removeTodo} from '../store/todoSlice'

import css from '../App.module.css';

const TodoItem = ({id, text, completed}) => {
    const dispatch=useDispatch();

    return (
        <div className={css.TodoItem}>
            <input
                type='checkbox'
                checked={completed}
                onChange = {()=>dispatch(toggleCompletedTodo({id}))}
            />
            <div>{text}</div>
            <button onClick={()=>dispatch(removeTodo({id}))}>Delete</button>
        </div>
    );
};

export default TodoItem;