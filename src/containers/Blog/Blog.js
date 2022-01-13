import React from 'react';
import './Blog.css';
import Post from '../../components/Post/Post';
import useFetch from '../../components/UseFetch/UseFetch';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/_Aux';
import { Link } from 'react-router-dom';

const Blog = () => {

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <Aux>
            <div className='Blog'>
                <Button><Link to='/new-post'>New Post</Link></Button>
                { error && <div>{error}</div>}
                { isPending && <div>Loading...</div>}
                {blogs && <Post blogs={blogs}></Post>}
            </div>
        </Aux>
    )
}
export default Blog;