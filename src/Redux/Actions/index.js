import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

export const login = (username,password) => {
    return async function(dispatch,getState){
        const response = await axios.get(`http://localhost:3000/users?username=${username}`);
        if(response.data.length===0){
            dispatch({
                type : 'SET_LOGIN_ERROR',
                payload : 'Invalid username'
            })
        }else if(response.data[0].password !== password){
            dispatch({
                type : 'SET_LOGIN_ERROR',
                payload : 'Incorrect password'
            })
        }else{
            dispatch({
                type : 'LOGIN',
                payload : {
                    id : response.data[0].id,
                    fullName : `${response.data[0].firstName} ${response.data[0].lastName}`,
                    firstName : response.data[0].firstName,
                    lastName : response.data[0].lastName,
                    age : response.data[0].age,
                    company : response.data[0].company,
                    contactNumber : response.data[0].contactNumber
                }
            })
        }
    }
}

export const signUp = (userDetails) => {
    return async function(dispatch,getState){
        const response1 = await axios.get(`http://localhost:3000/users?username=${userDetails.username}`);
        if(response1.data.length!==0){
            dispatch({
                type : 'SET_LOGIN_ERROR',
                payload : 'Username already exists'
            })
        }
        const response2 = await axios.post(`http://localhost:3000/users`,{
            "username" : userDetails.username,
            "password" : userDetails.password,
            "firstName" : userDetails.fname,
            "lastName" : userDetails.lname,
            "age" : userDetails.age,
            "gender" : userDetails.gender,
            "company" : userDetails.company,
            "contactNumber" : userDetails.contact,
            "city" : userDetails.city,
            "state" : userDetails.state,
            "country" : userDetails.country,
            "id" : uuidv4()
        })
        dispatch({
            type : 'SIGN_UP',
            payload : {
                id : response2.data.id,
                fullName : `${response2.data.firstName} ${response2.data.lastName}`,
                firstName : response2.data.firstName,
                lastName : response2.data.lastName,
                age : response2.data.age,
                company : response2.data.company,
                contactNumber : response2.data.contactNumber
            }
        })
    }
}

export const setLoginError = (errorMessage) => {
    return {
        type : 'SET_LOGIN_ERROR',
        payload : errorMessage
    }
}

export const logout = () => {
    return {
        type : 'LOGOUT'
    }
}

export const resetPassword = (currentPassword,newPassword) => {
    return async function(dispatch,getState){
        const id = getState().loggedInUser.id;
        const response1 = await axios.get(`http://localhost:3000/users/${id}`);
        if(currentPassword !== response1.data.password){
            dispatch({
                type : 'SET_RESET_PASSWORD_ERROR',
                payload : 'The current password that you have entered is incorrect'
            })
        }else{
            const response2 = await axios.patch(`http://localhost:3000/users/${id}`,{
                "password" : newPassword
            })
            console.log(response2);
            dispatch({
                type : 'RESET_PASSWORD',
                payload : 'Success'
            })
        }
    }
}

export const clearResetPasswordStatus = () => {
    return {
        type : 'CLEAR_RESET_PASSWORD_STATUS'
    }
}

export const setResetPasswordError = (errorMessage) => {
    return {
        type : 'SET_RESET_PASSWORD_ERROR',
        payload : errorMessage
    }
}

export const editDetails = (firstName,lastName,age,company,contactNumber) => {
    return async function (dispatch,getState){
        const id = getState().loggedInUser.id;
        const response = await axios.patch(`http://localhost:3000/users/${id}`,{
            "firstName" : firstName,
            "lastName" : lastName,
            "age" : age,
            "company" : company,
            "contactNumber" : contactNumber
        })
        dispatch({
            type : 'LOGIN',
            payload : {
                id : response.data.id,
                fullName : `${response.data.firstName} ${response.data.lastName}`,
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                age : response.data.age,
                company : response.data.company,
                contactNumber : response.data.contactNumber
            }
        })
        dispatch({
            type : 'EDIT_DETAILS',
            payload : 'Success'
        })
    }
}

export const clearEditDetailsStatus = () => {
    return {
        type : 'CLEAR_EDIT_DETAILS_STATUS'
    }
}

export const setEditDetailsError = (errorMessage) => {
    return {
        type : 'SET_EDIT_DETAILS_ERROR',
        payload : errorMessage
    }
}

export const getPosts = (category,page) => {
    return async function(dispatch,getState){
        const response = await axios.get(`http://localhost:3000/${category}?_page=${page}&_limit=4`);
        dispatch({
            type : 'GET_POSTS',
            payload : response.data
        })
    }
}