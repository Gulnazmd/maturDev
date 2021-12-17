import React from 'react';
import './Skills.css';

const Skills = (props) => (
       
        <div className="MySkills">
            <h2>{props.title}</h2>
            <ul>
                {props.children}
            </ul>
        </div>
)

export default Skills;