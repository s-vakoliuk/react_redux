import React from 'react';

import css from '../App.module.css';

const PostItem = ({id,title}) => {
    return (
        <div className={css.postItem}>
            {id} - {title}
        </div>
    );
};

export default PostItem;