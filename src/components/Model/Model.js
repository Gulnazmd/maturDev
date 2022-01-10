import React from 'react';
import './Model.css';

const Model = (props) => (
       
        <div className="Model" style={{zIndex: '10'}}>
            <article className="ModelInfo">
                <h3>{props.title}</h3>
                <p>{props.children}</p>
            </article>
        </div>
)

export default Model;