import React from 'react';
import './Card.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';

const Card = (props) => {
    
    return(
            <div className='MyCard'>       
                    <TextField className="InputElement" 
                        id="email" required
                        placeholder="email" />
                    <TextField className='InputElement' required
                        id="password" 
                        placeholder='password'
                        type={props.showPassword ? 'text' : 'password'}/>
                           <InputAdornment className="MyIcon">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={props.onClick}
                                onMouseDown={props.onMouseDown}>
                                {props.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                            {props.children}
                    <div> 
                        <br/>
                        <Button onClick={props.signUp} variant="contained" color="primary">
                            Sign In
                        </Button>
                    </div>
            </div>
    )
    
}

export default Card;