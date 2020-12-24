import React from 'react';
import {connect} from 'react-redux';
import {setEditDetailsError,editDetails,clearEditDetailsStatus} from '../../Redux/Actions/index';
import './EditDetails.css';

class EditDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : this.props.loggedInUser.firstName,
            lastName : this.props.loggedInUser.lastName,
            age : this.props.loggedInUser.age,
            company : this.props.loggedInUser.company,
            contactNumber : this.props.loggedInUser.contactNumber
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.id] : evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const {firstName,lastName,age,company,contactNumber} = this.state;
        if(!firstName || !lastName || !age || !company || !contactNumber){
            this.props.setEditDetailsError('None of the fields should be empty');
        }else{
            this.props.editDetails(firstName,lastName,age,company,contactNumber).then(() => {
                if(this.props.editDetailsStatus){
                    this.props.cancel();
                }
            });
        }
    }

    render(){
        return(
            <div className="editDetails-container">
                <form onSubmit={this.handleSubmit}>
                    {this.props.editDetailsError?<div className="error-container">{this.props.editDetailsError}</div>:null}
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="firstName">First Name : </label>
                        <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="lastName">Last Name : </label>
                        <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="age">Age : </label>
                        <input type="text" id="age" value={this.state.age} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="company">Company : </label>
                        <input type="text" id="company" value={this.state.company} onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label className="blueLabel" htmlFor="contactNumber">Contact Number : </label>
                        <input type="text" id="contactNumber" value={this.state.contactNumber} onChange={this.handleChange}/>
                    </div>
                    <div className="buttons-container">
                        <button type="submit">Edit</button>
                        <button onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }

    componentWillUnmount = () => {
        this.props.setEditDetailsError('');
        this.props.clearEditDetailsStatus();
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser,
        editDetailsError : state.editDetailsError,
        editDetailsStatus : state.editDetails
    }
}

export default connect(mapStateToProps,{setEditDetailsError,editDetails,clearEditDetailsStatus})(EditDetails);