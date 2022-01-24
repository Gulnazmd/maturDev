import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import MyPhoto from '../../images/myPhoto.jpg';
import Aux from '../../hoc/_Aux';
import ToDoForm from '../../containers/Todo/ToDoForm';

const Main = (props) => (
    <Aux>
        <div className="Main">
        <img className="Photo" src={MyPhoto} alt="альтернативный текст"/>
                    <h1>Hello! I'm Gulnaz</h1>
                    <p>React/Frontend developer</p>
                    <div className="Resume">
                        <Link to='/about'><h3>Resume</h3></Link>
                        <span></span>
                    </div>
                    <div className="Portfolio">
                    <Link to='/portfolio'><h3>Portfolio</h3></Link>
                        <span></span>
                    </div>
                    <div className="Skills">
                        <h3>Skills</h3>
                        <span></span>
                    </div>
        </div>
       <ToDoForm/>
    </Aux>
)

export default Main;