export const editDetailsErrorReducer = (state=null,action) => {
    switch(action.type){
        case 'SET_EDIT_DETAILS_ERROR' : return action.payload
        default : return state
    }
}