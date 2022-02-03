import React, {useState} from 'react';
import {useDispatch} from "react-redux";
// Для генерації id підключено бібліотеку uuid
import {v4} from 'uuid'

import {addTodo} from "../slices/todoSlice";

const Form = () => {
    const dispatch=useDispatch()
    const [todoValue, setTodoValue]=useState()

    const addTodoHandler=()=>{
        const todo ={
            id: v4(),
            text: todoValue,
            completed:false,
        }

        dispatch(addTodo(todo))
        setTodoValue('')
    }

    return (
        <form className='Form' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Введіть справу...'
                value={todoValue}
                onChange={(event)=>setTodoValue(event.target.value)}
            />
            <button
                type='submit'
                className='Button'
                onClick={()=>addTodoHandler()}
            >
                Save</button>
        </form>
    );
};

export default Form;