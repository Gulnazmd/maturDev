import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '../UI/Button/Button';

const Contact = (props) => {
    
    return(
        <div className="Input">
            <div className='InputDiv'>
                <h1>Write me</h1>
                <p>I'll answer you asap</p>
            </div>
            <div className="InputBox">
                <TextField className="InputElement" 
                                label="Name" 
                                onChange={props.onChange}/>
                <TextField className="InputElement" 
                                label="Email" 
                                onChange={props.onChange}/>
                <TextField className="InputElement" 
                                label="Phone number" 
                                onChange={props.onChange}/>
                <TextField
                        id="filled-textarea"
                        label="Add some message"
                        placeholder="message"
                        multiline />
            </div>
            <Button>Send</Button>
        </div>
    )
}
export default Contact;