import React from 'react';
import { connect } from 'react-redux';
import { signUp,setLoginError } from '../../Redux/Actions/index';
import valiidator from 'validator';
import './SignUp.css';

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fname : '',
            lname : '',
            age : '',
            gender : '',
            company : '',
            contact : '',
            city : '',
            state : '',
            country : '',
            username : '',
            password : ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.id] : evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const {fname,lname,age,gender,company,contact,city,state,country,username,password} = this.state;
        if(!fname || !lname || !age || !gender || !company || !contact || !city || !state || !country || !username || !password){
            this.props.setLoginError('All fields are mandatory');
        }else if(!valiidator.isEmail(username)){
            this.props.setLoginError('Enter a valid username');
        }else {
            this.props.signUp(this.state);
        }
    }

    render(){
        return(
            <div className="signup-container">
                <h2>SIGN UP</h2>
                {this.props.loginError?<div className="error-container">{this.props.loginError}</div>:null}
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="fname">First Name : </label>
                        <input type="text" id="fname" value={this.props.fname} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="lname">Last Name : </label>
                        <input type="text" id="lname" value={this.props.lname} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="age">Age : </label>
                        <input type="text" id="age" value={this.props.lname} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="gender">Gender : </label>
                        <select id="gender" value={this.state.gender} onChange={this.handleChange}>
                            <option value=''/>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="company">Company : </label>
                        <input type="text" id="company" value={this.props.company} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="contact">Contact Number : </label>
                        <input type="tel" id="contact" pattern="[9]{1}[0-9]{9}" value={this.state.contact} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="city">City : </label>
                        <select id="city" value={this.state.city} onChange={this.handleChange}>
                            <option value=''/>
                            <option value='Bangalore'>Bangalore</option>
                            <option value='Mangalore'>Mangalore</option>
                            <option value='Albany'>Albany</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="state">State : </label>
                        <select id="state" value={this.state.state} onChange={this.handleChange}>
                            <option value=''/>
                            <option value='Karnataka'>Karnataka</option>
                            <option value='New York'>New York</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="country">Country : </label>
                        <select id="country" value={this.state.country} onChange={this.handleChange}>
                            <option value=''/>
                            <option value='India'>India</option>
                            <option value='US'>US</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="username">Username : </label>
                        <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password : </label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <div>&nbsp;</div>
                        <button type="submit">SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        loginError : state.loginError
    }
}

export default connect(mapStateToProps,{signUp,setLoginError})(SignUp);