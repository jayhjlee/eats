// Your redux store entry file..

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "./reducers";

const middleware = [thunk];
const env = process.env.NODE_ENV;

env !== "production" ? middleware.push(logger) : null;

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
