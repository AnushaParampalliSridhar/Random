import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login,setLoginError} from '../../Redux/Actions/index';
import valiidator from 'validator';
import './SignIn.css';

class SignIn extends React.Component{
    constructor(props){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.id] : evt.target.value
        })
    }

    handleSubmit = () => {
        if(this.state.username==='' && this.state.password===''){
            this.props.setLoginError('Username and password should not be empty');
        }else if(this.state.username===''){
            this.props.setLoginError('Username should not be empty');
        }else if(this.state.password===''){
            this.props.setLoginError('Password should not be empty');
        }else if(!valiidator.isEmail(this.state.username)){
            this.props.setLoginError('Enter a valid username');
            this.setState({
                username : ''
            })
        }else{
            this.props.login(this.state.username,this.state.password);
            this.setState({
                username : '',
                password : ''
            })
        }
    }

    render(){
        return(
            <div className="signin-container">
                <h2>SIGN IN</h2>
                {this.props.loginError?<div className="error-container">{this.props.loginError}</div>:null}
                <div className="input-container">
                    <label htmlFor="username">Username : </label>
                    <input type="email" id="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="input-container">
                    <div>&nbsp;</div>
                    <button type="submit" onClick={this.handleSubmit}>SIGN IN</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        loggedInUser : state.loggedInUser,
        loginError : state.loginError
    }
}

export default connect(mapStateToProps,{login,setLoginError})(SignIn);