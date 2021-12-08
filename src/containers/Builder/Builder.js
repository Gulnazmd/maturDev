import React, {Component} from 'react';
import './Builder.css';
import Modal from './../../components/UI/Modal/Modal';
import Aux from '../../hoc/_Aux';


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
                    <Modal open={this.state.card} cardOpened={this.closedHandler}>
                        <div className="DataForm">
                        <Card
                            show={this.state.showCard}s
                            cardOpened={this.closedHandler}
                            showPassword={this.state.showPassword}
                            onClick={this.handleClickShowPassword}
                            signUp={this.signUpHandler}/>
                        </div>
                    </Modal>
            </Aux>
        );

    }
}

export default DataForm;