import React from 'react';

import css from '../App.module.css';

const PostItem = ({post}) => {
    const {userId, id, title}=post
    return (
        <div className={css.postItem}>
            {userId} - {id} - {title}
            {/*{JSON.stringify(post)};*/}
        </div>
    );
};

export default PostItem;