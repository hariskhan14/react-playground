import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

//Combining reducers
const reducers = combineReducers({
    account: accountReducer,
});

export default reducers;