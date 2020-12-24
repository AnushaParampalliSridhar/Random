import React from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../../Redux/Actions/index';
import Carousel from '../Carousel/Carousel';
import './Fashion.css';

class Fashion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true
        }
    }

    componentDidMount(){
        this.props.getPosts('fashion',1).then(()=>{
            this.setState({
                loading : false
            })
        })
    }

    render(){
        console.log(this.props.posts);
        if(this.state.loading){
            return <div className="loader">Loading <i className="ion-load-a"/></div>
        }else{
            return(
                <div className="posts-container">
                    {this.props.posts.map((post) => {
                        return(
                            <div className="item" key={post.id}>
                                <h4>{post.trendName}</h4>
                                <Carousel images={post.images} />
                            </div>
                        )
                    })}
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps,{getPosts})(Fashion);