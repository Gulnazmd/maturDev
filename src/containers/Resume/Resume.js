import React, {Component} from 'react';
import './Resume.css';
import Nature from '../../images/nature.jpg';
import Aux from '../../hoc/_Aux';
import Model from '../../components/Model/Model';
import Skills from '../../components/Skills/Skills';


class Resume extends Component {

    constructor(props) {
        super(props)
            
        this.state = {
            loading: false,
            login: false,
            showCard: false,
            showPassword: false,
            card: false,
        }
   
    }

    signUpHandler = () => {
            alert('Sign up')
    }

    render() {
       
        return(
            <Aux>
                <div className="MyResume">
                    <h1>Resume</h1>
                    <section>
                            <Model>
                                <h3>About me</h3>
                                <p>My name is Gulnaz.
                                    I'm front-end developer based in Kazan. 
                                    My specialization is creating interactive experiences 
                                    and functional interfaces using JavaScript, CSS, React,
                                    Canvas and Design Systems.
                                </p>
                            </Model>
                            <Skills>
                                <h2>My skills</h2>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>CSS/SCSS</li>
                                </ul>
                            </Skills>
                    </section>
                    <h1>Work experience</h1>
                    <section>
                        
                            <Model>
                                <h3>My job</h3>
                                <p>React
                                </p>
                            </Model>
                            <div>
                                <img className="ResumePhoto" src={Nature} alt="альтернативный текст"/>
                            </div>
                    </section>
                </div>
            </Aux>
        );

    }
}

export default Resume;