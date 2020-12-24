import React from 'react';
import {connect} from 'react-redux';
import { resetPassword , setResetPasswordError , clearResetPasswordStatus } from '../../Redux/Actions/index';
import './ResetPassword.css';

class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPassword : '',
            newPassword : '',
            confirmNewPassword : ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.id] : evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const {currentPassword,newPassword,confirmNewPassword} = this.state;
        if(!currentPassword || !newPassword || !confirmNewPassword){
            this.props.setResetPasswordError('All the fields are mandatory')
            this.setState({
                currentPassword : '',
                newPassword : '',
                confirmNewPassword : ''
            })
        }else if(newPassword !== confirmNewPassword){
            this.props.setResetPasswordError('The passwords do not match');
            this.setState({
                currentPassword : '',
                newPassword : '',
                confirmNewPassword : ''
            })
        }else{
            this.props.resetPassword(currentPassword,newPassword).then(() => {
                if(this.props.resetPasswordStatus){
                    this.props.cancel();
                }
            })
        }
    }

    render(){
        return(
            <div className="resetPassword-container">
                <form onSubmit={this.handleSubmit}>
                    {this.props.resetPasswordError?<div className="error-container">{this.props.resetPasswordError}</div>:null}
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="currentPassword">Current Password : </label>
                        <input type="password" id="currentPassword" value={this.state.currentPassword} onChange={this.handleChange} />
                    </div>
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="newPassword">New Password : </label>
                        <input type="password" id="newPassword" value={this.state.newPassword} onChange={this.handleChange} />
                    </div>
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="confirmNewPassword">Confirm New Password : </label>
                        <input type="password" id="confirmNewPassword" value={this.state.confirmNewPassword} onChange={this.handleChange}/>
                    </div>
                    <div className="buttons-container">
                        <button type="submit">Reset</button>
                        <button onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }

    componentWillUnmount = () => {
        this.props.setResetPasswordError('');
        this.props.clearResetPasswordStatus();

    }
}

const mapStateToProps = (state) => {
    return{
        resetPasswordError : state.resetPasswordError,
        resetPasswordStatus : state.resetPassword
    }
}

export default connect(mapStateToProps,{resetPassword,setResetPasswordError,clearResetPasswordStatus})(ResetPassword);