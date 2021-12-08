import React from 'react';
import Aux from '../../hoc/_Aux';
import Footer from '../Footer/Footer';
import Header from '../Hearder/Hearder';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <Header opened={props.open} clicked={props.cardOpened}/>
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer/>
    </Aux>
);

export default layout;