import React, {Component} from 'react';
import './PortfolioBuilder.css';
import Aux from '../../hoc/_Aux';
import Portfolio from '../../components/Portfolio/Portfolio';
import Site from '../../images/site.png';
import Bird from '../../images/bird.png';
import Data from '../../images/data.png';


class PortfolioBuilder extends Component {

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
                <div className='MyPortfolio'>
                    <Portfolio>
                        <div><img src={Bird} alt='' style={{width: '90%', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React Project Rocket</h3>
                        <p>Microsoft Project — программа управления проектами, разработанная и продаваемая корпорацией Microsoft. </p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={Data} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React Project Rocket</h3>
                        <p>Microsoft Project — программа управления проектами, разработанная и продаваемая корпорацией Microsoft. </p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={Site} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React Project Rocket</h3>
                        <p>Microsoft Project — программа управления проектами, разработанная и продаваемая корпорацией Microsoft. </p>
                    </Portfolio>
                </div>
            </Aux>
        );

    }
}

export default PortfolioBuilder;