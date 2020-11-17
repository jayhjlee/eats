import { combineReducers } from "redux";

// Your individual reducer goes here!
import user from "./user";
import places from "./places";
import errors from "./errors";
import messages from "./messages";

const rootReducer = combineReducers({ user, places, errors, messages });

export default rootReducer;
