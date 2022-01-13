import React, {Component} from 'react';
import './PortfolioBuilder.css';
import Aux from '../../hoc/_Aux';
import Portfolio from '../../components/Portfolio/Portfolio';
import Site from '../../images/site.png';
import Drop from '../../images/flags.png';
import Data from '../../images/data.png';
import MyAxios from '../../images/axios.png';
import Mysite from '../../images/sitepage.jpg';
import Moon from '../../images/moon.png';


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
                        <div><img src={Drop} alt='' style={{width: '90%', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>JS Project</h3>
                        <p>Drag and drop quiz with appear animation. JavaScript</p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={Data} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React Project</h3>
                        <p>Data Forms. Material UI. </p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={Site} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>JS Project</h3>
                        <p>Drag and drop test.</p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={MyAxios} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React project</h3>
                        <p>Create wish card. Route, axios, http requests. </p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={Mysite} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React Project</h3>
                        <p>Site’s main page. Material UI.</p>
                    </Portfolio>
                    <Portfolio>
                        <div><img src={Moon} alt='' style={{width: '328px', height: '250px', padding: '10px', marginTop: '20px'}}/></div>
                        <h3>React Project</h3>
                        <p>Rocket. Components, Backdrop effect.</p>
                    </Portfolio>
                </div>
            </Aux>
        );

    }
}

export default PortfolioBuilder;