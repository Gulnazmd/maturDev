import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../UseFetch/UseFetch";
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import './PostDetails.css';
import Model from "../../Model/Model";
import { useState } from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function PostDetails() {
    const {id} = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const [ likes, setLikes ] = useState(0);

    const navigateTo = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigateTo('/blogs')
        })
    }

    return (
        <div className="PostDetails">
             { isPending && <div>Loading...</div>}
             { error && <div>{error}</div>}
             {blog && (
                <Model>
                     <h3>{blog.title}</h3>
                     <p>Written by {blog.author}</p>
                     <p>{blog.content}</p>
                     <small className="Likes"
                            onClick={() => setLikes(likes + 1)}> {blog.likes + likes} <FavoriteBorderIcon/> </small>
                     <Button clicked={handleDelete}>Delete</Button>
                </Model>
             )}
        </div>
    );
}

export default PostDetails;