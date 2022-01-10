import React from 'react';
import './Hearder.css';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className="Header">
       <ul>
           <li><Link to="/">MaturDev</Link></li>
           <li><Link to="/blogs">Blog</Link></li>
           <li><Link to="/contact">Contact</Link></li>
       </ul>
       <p className='Sign'>
           <Link opened={props.open} onClick={props.clicked} to="/dataform">Sign IN</Link>
       </p>
    </div>
)
export default Header;