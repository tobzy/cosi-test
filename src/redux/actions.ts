import * as types from './actionTypes';

export const saveUserDetails = (user:Object) => {
    return {
        type:types.SAVE_USER_DETAILS,
        user
    }
}