import * as types from './actionTypes';
const initialState:Object = {}

interface Action {
    type: string;
    user?: object;
}

function userReducer(state = initialState, action:Action) {
    switch (action.type) {
        case (types.SAVE_USER_DETAILS):
            console.log(action)
            return { ...state, ...action.user };

        default:
            return state;
    }
}
export default userReducer;