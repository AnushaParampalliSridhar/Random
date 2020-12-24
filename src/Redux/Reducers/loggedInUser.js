export const loggedInUserReducer = (state=null,action) => {
    switch(action.type){
        case 'LOGIN' : return action.payload
        case 'SIGN_UP' : return action.payload
        case 'LOGOUT' : return null
        default : return state
    }
}