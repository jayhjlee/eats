import { combineReducers } from "redux";

// Your individual reducer goes here!
import user from "./user";
import places from "./places";

const rootReducer = combineReducers({ user, places });

export default rootReducer;
