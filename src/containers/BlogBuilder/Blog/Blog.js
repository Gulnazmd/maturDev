import React, { useState } from 'react';
import './Blog.css';
import Post from '../../../components/Post/Post';

const Blog = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.', author: '', id: 1},
        { title: 'Women on web developing', body: 'Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.', author: '', id: 2}
    ]);

    const handleDelete  = (id) => {
        const newPosts = blogs.filter(blog => blog.id !== id);
        setBlogs(newPosts);
    }

    return (
        <div className='Blog'>
            <Post blogs={blogs} handleDelete={handleDelete}/>
        </div> 
    )
}
export default Blog;