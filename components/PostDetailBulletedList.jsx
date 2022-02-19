import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';


const PostDetailBulletedList = (lst) => {
    return (
        <RichText content={lst.lst} />
    );
};

export default PostDetailBulletedList;
