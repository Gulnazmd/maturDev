import React, {Component} from 'react';
import './BlogBuilder.css';
import Aux from '../../hoc/_Aux';
import NewPost from '../../components/CreatePost/NewPost';
import Blog from '../BlogBuilder/Blog/Blog';


class DataForm extends Component {

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

    handleClickShowPassword = () => {
        const show = this.state.showPassword
        this.setState( {showPassword: !show });
      };

    toggleDataHandler = () => {
        const doesShow = this.state.card;
        this.setState( { card: !doesShow });
        alert('modal')
      }
    closedHandler = () => {
        this.setState({card: false});
    }

    render() {
       
        return(
            <Aux>
                    <Blog/>
                    <NewPost/>
            </Aux>
        );

    }
}

export default DataForm;