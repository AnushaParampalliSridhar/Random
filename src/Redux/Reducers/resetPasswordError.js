export const resetPasswordErrorReducer = (state=null,action) => {
    switch(action.type){
        case 'SET_RESET_PASSWORD_ERROR' : return action.payload
        default : return state
    }
}