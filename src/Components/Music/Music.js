import React from 'react';
import {getPosts} from '../../Redux/Actions/index';
import {connect} from 'react-redux';
import './Music.css';

class Music extends React.Component{

    constructor(props){
        super();
        this.state = {
            loading : true,
            page : 1
        }
    }

    componentDidMount(){
        this.props.getPosts('music',1).then(()=>{
            this.setState({
                loading : false
            })
        })
    }

    goBack = () => {
        this.setState({
            page : this.state.page-1,
            loading : true
        },()=>{
            this.props.getPosts('music',this.state.page).then(()=>{
                this.setState({
                    loading : false
                })
            })
        })
    }

    goNext = () => {
        this.setState({
            page : this.state.page+1,
            loading : true
        },() => {
            this.props.getPosts('music',this.state.page).then(() => {
                this.setState({
                    loading : false
                })
            })
        })
    }

    render(){
        if(this.state.loading){
            return <div className="loader">Loading <i className="ion-load-a"/></div>
        }else{
            return(
                <div className="posts-container">
                    {this.props.posts.map((post) => {
                        return(
                            <div className="post" key={post.id}>
                                <iframe width="400" height="220" src={post.videoUrl}></iframe>
                                <div  className="post-details">
                                    <div><strong>Song Name : </strong> <span>{post.songName}</span></div>
                                    <div><strong>Movie Name : </strong> <span>{post.movieName}</span></div>
                                    <div><strong>Composer : </strong> <span>{post.composer}</span></div>
                                    <div><strong>Lyricist : </strong> <span>{post.lyricist}</span></div>
                                    <div><strong>Released In : </strong> <span>{post.yearOfRelease}</span></div>
                                    <div><strong>Duration : </strong> <span>{post.duration}</span></div>
                                    {post.singer.length===1?
                                    <div><strong>Singer : </strong><span>{post.singer[0]}</span></div>
                                    : <div><strong>Singers : </strong><span>{post.singer.join(' , ')}</span></div>
                                    }
                                    {post.features.length===1?
                                    <div><strong>Features : </strong><span>{post.features[0]}</span></div>
                                    : <div><strong>Features : </strong><span>{post.features.join(' , ')}</span></div>
                                    }
                                </div>
                            </div>
                        )
                    })}
                    <div className="pages">
                        {this.state.page===1 ?
                        <button disabled><i className="ion-android-arrow-dropleft"/></button>
                        : <button onClick={this.goBack}><i className="ion-android-arrow-dropleft"/></button>}
                        <span>{this.state.page}</span>
                        {this.state.page===3 ?
                        <button disabled><i className="ion-android-arrow-dropright"/></button>
                        : <button onClick={this.goNext}><i className="ion-android-arrow-dropright"/></button>}
                    </div>
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

export default connect(mapStateToProps,{getPosts})(Music);