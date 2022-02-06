import React from 'react';
import {useSelector} from "react-redux";

import css from '../App.module.css';
import PostItem from "./PostItem";

const PostList = () => {
    const posts = useSelector(state => {
        console.log("useSelector rerendering");
        return state.posts;
    });

    return (
        <div className={css.getPosts}>
            {posts.map((post) => (
                <PostItem key={post.id} {...post}/>
            ))}
        </div>
    );
};

export default PostList;