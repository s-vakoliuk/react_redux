import React from 'react';

import css from './App.module.css';
import PostList from "./components/PostList";
import {getPosts} from "./store";
import {useDispatch} from "react-redux";

function App() {
    const dispatch=useDispatch();

    return (
        <div className={css.App}>
            <h3>Натисни на кнопку щоб отримати публікації</h3>
            <button
                type='submit'
                onClick={()=>dispatch(getPosts())}
            >
                Get Posts
            </button>

            <PostList/>
    </div>
  );
}

export default App;
