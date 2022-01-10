
import React from "react";
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ blogs, title }) => {
    
    return (
        <div className='PostDiv'>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='Post-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <small className="SmallDiv">{blog.likes} likes</small>
                        <p>{blog.body}</p>
                        <p className="SmallDiv">Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Post;