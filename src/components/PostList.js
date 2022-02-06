import React from 'react';

import css from '../App.module.css';
import PostItem from "./PostItem";

const PostList = (posts) => {

    return (
        <div className={css.getPosts}>
            {posts.map((post)=>(
                <PostItem key={post.id} {...post}/>
            ))}
        </div>
    );
};

export default PostList;