import React from 'react';
import './Carousel.css';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 1
        }
    }

    goBack = () => {
        if(this.state.number === 1){
            this.setState({
                number : this.props.images.length
            })
        }else{
            this.setState({
                number : this.state.number + 1
            })
        }
    }

    goForward = () => {
        if(this.state.number === this.props.images.length){
            this.setState({
                number : 1
            })
        }else{
            this.setState({
                number : this.state.number + 1
            })
        }
    }

    render(){
        return(
            <div className="carousel">
                <div className="arrow" onClick={this.goBack}><i className="ion-arrow-left-b"></i></div>
                <div className="carousel-image-container">
                    <img src={`${this.props.images[this.state.number-1]}`}></img>
                </div>
                <div className="arrow" onClick={this.goForward}><i className="ion-arrow-right-b"></i></div>
            </div>
        )
    }
}

export default Carousel;