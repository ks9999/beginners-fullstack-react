import React from 'react';
import {useParams} from "react-router-dom";

const Post = () => {
    let { postid } = useParams();
    return (
        <div>
            <h1>Posts</h1>
            <h3>Post number: {postid}</h3>
        </div>
    );
};

export default Post;