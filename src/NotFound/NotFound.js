import React from 'react';
import { Link } from 'react-router-dom';
import Model from '../components/Model/Model';

const NotFound = () => (
       
        <Model>
            <article>
                <h3>Sorry</h3>
                <p>That page can not be found</p>
                <Link to="/">Back to the homepage...</Link>
            </article>
        </Model>
)

export default NotFound;