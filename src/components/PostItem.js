import React from 'react';

import css from '../App.module.css';

const PostItem = ({posts}) => {
    return (
        <div className={css.postItem}>
            {posts.userId} - {posts.id} - {posts.title}
        </div>
    );
};

export default PostItem;