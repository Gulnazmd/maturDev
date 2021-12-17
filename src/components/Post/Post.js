import Button from '../UI/Button/Button';
import React from "react";
import './Post.css';

const Post = ({ blogs, handleDelete }) => {

    
    return (
        <div className='PostDiv'>
                {blogs.map((blog) => (
                    <div className='Post-preview' key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Written by {blog.author}</p>
                        <Button clicked={() => handleDelete(blog.id)}>Delete</Button>
                    </div>
                ))}
            </div>
    );
}

export default Post;