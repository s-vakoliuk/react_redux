import React from 'react';

import css from '../App.module.css';

const PostItem = ({userId, title}) => {
    return (
        <div className={css.postItem}>
            {userId} - {title}
        </div>
    );
};

export default PostItem;