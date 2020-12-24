import React from 'react';
import './Travel.css';

class Travel extends React.Component{
    constructor(props){
        super();
        this.state = {
            loading : true
        }
    }

    componentDidMount = () => {

    }

    render(){
        if(this.state.loading){
            return <div className="loader">Loading <i className="ion-load-a"/></div>
        } else{
            return(
                <div className="posts-container">
    
                </div>
            )
        }
    }
}

export default Travel;