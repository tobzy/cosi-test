import UserReducer from './userReducer';
import {combineReducers} from "redux";

const appReducer = combineReducers({
    user:UserReducer,
})
export default appReducer