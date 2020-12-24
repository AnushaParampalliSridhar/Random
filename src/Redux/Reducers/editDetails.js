export const editDetailsReducer = (state=null,action) => {
    switch(action.type){
        case 'EDIT_DETAILS' : return action.payload
        case 'CLEAR_EDIT_DETAILS_STATUS' : return null
        default : return state
    }
}