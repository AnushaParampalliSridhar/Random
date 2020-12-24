import {combineReducers} from 'redux';
import {loggedInUserReducer} from './loggedInUser';
import {loginErrorReducer} from './loginError';
import {resetPasswordErrorReducer} from './resetPasswordError';
import {resetPasswordReducer} from './resetPassword';
import {editDetailsErrorReducer} from './editDetailsError';
import {editDetailsReducer} from './editDetails';
import {postsReducer} from './posts';

export default combineReducers({
    loggedInUser : loggedInUserReducer,
    loginError : loginErrorReducer,
    resetPasswordError : resetPasswordErrorReducer,
    resetPassword : resetPasswordReducer,
    editDetailsError : editDetailsErrorReducer,
    editDetails : editDetailsReducer,
    posts : postsReducer
})