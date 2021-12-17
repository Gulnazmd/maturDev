import React from 'react';
import './Footer.css';
import Instagram from '../../../images/instagram.svg';
import Twitter from '../../../images/tw-3.svg';
import Facebook from '../../../images/fb.svg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Aux from '../../../hoc/_Aux';

const Footer = (props) => (
    <Aux>
    <div className="Footer">
        <div className="Icons">
            <a className="Instagram" target='_blank' rel="noreferrer" href='https://www.instagram.com/gulnazmd/'><img className="Inst" src={Instagram} alt="альтернативный текст"/></a>
            <img className="Twitter" src={Twitter} alt="альтернативный текст"/>
            <img className="Facebook" src={Facebook} alt="альтернативный текст"/>
        </div>
                    
    </div>
    <div className="Icon">
                        <small> © Made with <FavoriteBorderIcon/> by Gulnaz </small>
    </div>
    </Aux>
)
export default Footer;