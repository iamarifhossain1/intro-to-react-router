import React from 'react';
import { useLoaderData } from 'react-router';

const PostDeatails = () => {
    const post = useLoaderData();
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDeatails;