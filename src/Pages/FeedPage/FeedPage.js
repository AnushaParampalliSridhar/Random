import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './FeedPage.css';

class FeedPage extends React.Component{

    render(){
        if(!this.props.loggedInUser){
            return <Redirect to="/" />
        }
        return(
            <div className="feedPage">
                <Navbar/>
                <div className="categories">
                    <div className="row">
                        <div className="col">
                            <Link to="/music" className="category-link">
                                <div className="image-container music">
                                    MUSIC
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to ="/fashion" className="category-link">
                                <div className="image-container fashion">
                                    FASHION
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/travel" className="category-link">
                                <div className="image-container travel">
                                    TRAVEL
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/javascript" className="category-link">
                                <div className="image-container javascript">
                                    JAVASCRIPT
                                </div>
                            </Link>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(FeedPage);