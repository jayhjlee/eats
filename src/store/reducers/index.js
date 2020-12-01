import { combineReducers } from "redux";

// Your individual reducer goes here!
import user from "./user";
import errors from "./errors";
import messages from "./messages";

const rootReducer = combineReducers({ user, errors, messages });

export default rootReducer;
