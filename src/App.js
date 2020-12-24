import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignInPage/SigninPage';
import FeedPage from './Pages/FeedPage/FeedPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import PostsListPage from './Pages/PostsListPage/PostsListPage';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/signup" component={SignInPage} />
                <Route exact path="/feed" component={FeedPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/music" render={(props) => <PostsListPage category="Music" {...props}/>}/>
                <Route exact path="/fashion" render={(props) => <PostsListPage category="Fashion" {...props}/>}/>
                <Route exact path="/travel" render={(props) => <PostsListPage category="Travel" {...props}/>}/>
                <Route exact path="/javascript" render={(props) => <PostsListPage category="Javascript" {...props}/>}/>
            </BrowserRouter>
        )
    }
}

export default App;