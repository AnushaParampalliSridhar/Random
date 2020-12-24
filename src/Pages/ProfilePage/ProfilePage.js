import React from 'react';
import ResetPassword from '../../Components/ResetPassword/ResetPassword';
import EditDetails from '../../Components/EditDetails/EditDetails';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import './ProfilePage.css';

class ProfilePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showResetPassword : false,
            showEditDetails : false
        }
    }

    handleResetPasswordToggle = () => {
        this.setState({
            showResetPassword : !this.state.showResetPassword
        })
    }

    handleEditDetailsToggle = () => {
        this.setState({
            showEditDetails : !this.state.showEditDetails
        })
    }

    render(){
        if(!this.props.loggedInUser){
            return <Redirect to="/" />
        }
        return(
            <div className="profilePage">
                <Navbar />
                <div className="mainContent">
                    <div className="reset-password-toggle">
                        <h3>Reset Password</h3>
                        <button onClick={this.handleResetPasswordToggle}>{this.state.showResetPassword?<i className="ion-minus-round" />:<i className="ion-plus-round" />}</button>
                    </div>
                    {this.state.showResetPassword?<ResetPassword cancel={this.handleResetPasswordToggle}/>:null}
                    <div className="edit-details-toggle">
                        <h3>Edit Personal Details</h3>
                        <button onClick={this.handleEditDetailsToggle}>{this.state.showEditDetails?<i className="ion-minus-round"/>:<i className="ion-plus-round"/>}</button>
                    </div>
                    {this.state.showEditDetails?<EditDetails cancel={this.handleEditDetailsToggle}/>:null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps)(ProfilePage);