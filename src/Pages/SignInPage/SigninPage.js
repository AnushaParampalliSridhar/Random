import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import './SignInPage.css';

class SignInPage extends React.Component{
    render(){
        if(this.props.loggedInUser){
            return <Redirect to="/feed" />
        }
        if(this.props.match.path==='/signin'){
            return(
                <div className="signInPage">
                    <SignIn/>
                </div>
            )
        }
        if(this.props.match.path==='/signup'){
            return(
                <div className="signInPage">
                    <SignUp/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps)(SignInPage);