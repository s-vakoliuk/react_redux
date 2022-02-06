import React, {useEffect} from 'react';

import css from './App.module.css';
import PostList from "./components/PostList";
import {getPosts} from "./store";
import {useDispatch} from "react-redux";

function App() {
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        }, [dispatch]);

    return (
        <div className={css.App}>
            <button
                type='submit'
                onClick={()=>dispatch(getPosts())}
            >
                Get Posts
            </button>

            <PostList />
    </div>
  );
}

export default App;
