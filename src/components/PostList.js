import React from 'react';
import {useSelector} from "react-redux";

import css from '../App.module.css';
import PostItem from "./PostItem";

const PostList = () => {

    const {posts,status,error} = useSelector(store => store.posts);
    console.log(posts);
    console.log(status);
    console.log(error);


    return (
        <div className={css.getPosts}>
            {status==='loading' && <h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {posts.map((post) => (
                <PostItem key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostList;