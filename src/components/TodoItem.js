import React from 'react';
import {useDispatch} from "react-redux";

import  {toggleCompletedTodo, removeTodo} from '../slices/todoSlice'

const TodoItem = ({todo}) => {
    const dispatch=useDispatch()

    const toggleTodoHandler=(id)=>{
        dispatch(toggleCompletedTodo(id))
    }

    const removeTodoHandler=(id)=>{
        dispatch(removeTodo(id))
    }

    return (
        <div>
            To_do list
            <input
                type="checkbox"
                id="scales"
                name="scales"
                onClick = {()=>toggleTodoHandler(todo.id)}
            />
            <div>{todo.text}</div>
            <button onClick={()=>removeTodoHandler(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;