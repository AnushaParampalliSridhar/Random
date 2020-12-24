import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

class HomePage extends React.Component{
    render(){
        return(
            <div className="homePage">
                <div className="outer-container">
                    <div className="title-container">
                        <h1 className="title">Random.</h1>
                    </div>
                    <div className="sub-container">
                        <p className="field">Already a member?<Link to='/signin'>Sign In</Link></p>
                        <p className="field">New to Random?<Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;