import { combineReducers } from "redux";

// Your individual reducer goes here!
import user from "./user";
import places from "./places";
import errors from "./errors";

const rootReducer = combineReducers({ user, places, errors });

export default rootReducer;
