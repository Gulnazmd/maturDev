import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';

const Contact = (props) => {
    
    return(
        <div className="Input">
            <div className="InputBox">
                <TextField className="InputElement" 
                                label="Name" 
                                onChange={props.onChange}/>
                <TextField className="InputElement" 
                                label="Email" 
                                onChange={props.onChange}/>
                <TextField
                        id="filled-textarea"
                        label="Add some message"
                        placeholder="Placeholder"
                        multiline
                        variant="filled"/>
            </div>
        </div>
    )
}
export default Contact;