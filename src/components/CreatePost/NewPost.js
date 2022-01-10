import  Button  from '../UI/Button/Button';
import React from 'react';
import { useState } from 'react';
import './NewPost.css';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Gulnaz');
    const [isPending, setIsPending] = useState(false);
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, content, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post added');
            setIsPending(false);
            navigateTo('/blogs');
        })
    }
        
        return (
            <div className='NewPostDiv'>
                <div className="NewPost">
                    <h1>Add a Post</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        <label>Content</label>
                        <textarea 
                            rows="4" 
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                        <label>Author</label>
                        <select 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} >
                            <option value="Gulnaz">Gulnaz</option>
                            <option value="Rustam">Rustam</option>
                        </select>
                    </form>
                    { !isPending && <Button clicked={handleSubmit}>Add Post</Button>}
                    { isPending && <Button disabled clicked={handleSubmit}>Adding Post...</Button>}
                </div>
            </div>
        );
    }

export default NewPost;