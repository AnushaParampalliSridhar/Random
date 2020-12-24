export const loginErrorReducer = (state=null,action) => {
    switch(action.type){
        case 'SET_LOGIN_ERROR' : return action.payload
        default : return state
    }
}