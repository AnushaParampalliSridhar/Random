export const resetPasswordReducer = (state=null,action) => {
    switch(action.type){
        case 'RESET_PASSWORD' : return action.payload
        case 'CLEAR_RESET_PASSWORD_STATUS' : return null
        default : return state
    }
}