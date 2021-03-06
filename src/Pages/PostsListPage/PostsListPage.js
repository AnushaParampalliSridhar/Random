import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Music from '../../Components/Music/Music';
import Fashion from '../../Components/Fashion/Fashion';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './PostsListPage.css';

class PostsListPage extends React.Component{

    renderCategory = () => {
        switch(this.props.category){
            case 'Music' : return <Music/>
            case 'Fashion' : return <Fashion/>
            case 'Travel' : return <div>Travel</div>
            case 'Javascript' : return <div>Javascript</div>
        }
    }

    render(){
        if(!this.props.loggedInUser){
            return <Redirect to="/" />
        }
        return(
            <div className="postsListPage">
                <Navbar/>
                {this.renderCategory()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps,{})(PostsListPage);