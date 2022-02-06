import {useState} from "react";
import {useDispatch} from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {addTodo} from "./store/todoSlice";

import css from './App.module.css';

function App() {
    const [text, setText] = useState('');
    const dispatch=useDispatch();

    const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
    return (
        <div className={css.App}>
            <TodoForm
                value={text}
                updateText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    );
    }
    export default App;