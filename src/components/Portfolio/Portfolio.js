import React from 'react';
import './Portfolio.css';
import Aux from '../../hoc/_Aux';

const Portfolio = (props) => (
        <Aux>
            <div className="PortfolioDiv">
                <div className='ImgDiv'>{props.image}</div>
                <article className="PortfolioInfo">
                    <h3>{props.title}</h3>
                    <p>{props.children}</p>
                </article>
            </div>
        </Aux>
)

export default Portfolio;