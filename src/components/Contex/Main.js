import React from 'react';
import './Main.css';

import MyPhoto from '../../images/myPhoto.jpg';

const Main = (props) => (

       
        <div className="Main">
        <img className="Photo" src={MyPhoto} alt="альтернативный текст"/>
                    <h1>Hello! I'm Gulnaz</h1>
                    <p>React/Frontend developer</p>
                    <div className="Resume">
                        <h3>Resume</h3>
                        <span></span>
                    </div>
                    <div className="Portfolio">
                        <h3>Portfolio</h3>
                        <span></span>
                    </div>
                    <div className="Skills">
                        <h3>Skills</h3>
                        <span></span>
                    </div>
        </div>
)

export default Main;