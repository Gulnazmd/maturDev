import React from 'react';
import './Footer.css';
import Instagram from '../../../images/instagram.svg';
import Twitter from '../../../images/tw-3.svg';
import Git from '../../../images/git.png';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Aux from '../../../hoc/_Aux';

const Footer = (props) => (
    <Aux>
    <div className="Footer">
        <div className="Icons">
            <a className="Instagram" target='_blank' rel="noreferrer" href='https://www.instagram.com/gulnazmd/'><img className="Inst" src={Instagram} alt="альтернативный текст"/></a>
            <img className="Twitter" src={Twitter} alt="альтернативный текст"/>
            <a className='Git' target='_blank' rel='noreferrer' href='https://github.com/Gulnazmd'><img className='GitHab' src={Git} alt="альтернативный текст"/></a>
        </div>

    </div>
    <div className="Icon">
                        <small> © Copyright Gulnaz <FavoriteBorderIcon/>  </small>
    </div>
    </Aux>
)
export default Footer;