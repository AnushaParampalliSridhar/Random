import React from 'react';
import {logout} from '../../Redux/Actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component{

    handleLogOut = () => {
        this.props.logout();
    }

    render(){
        return(
            <nav className="navbar">
                <Link to="/profile" className="welcome">{`${this.props.loggedInUser.firstName} ${this.props.loggedInUser.lastName}`}</Link>
                <div className="btn-group">
                    <button onClick={this.handleLogOut}>Logout</button>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps,{logout})(Navbar);