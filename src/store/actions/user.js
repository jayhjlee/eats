import axios from "axios";
import { LOGGED_IN, LOGGED_OUT } from "../types/user";
import { GET_ERRORS } from "../types/errors";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types/messages";

const validUser = data => ({ type: LOGGED_IN, payload: data });
const gotUser = data => ({ type: LOGGED_IN, payload: data });
const logOutUser = () => ({ type: LOGGED_OUT });
const loginFailed = data => ({ type: GET_ERRORS, payload: data });
const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: data });
const logOutSuccess = msg => ({ type: LOGOUT_SUCCESS, payload: msg });

export const fetchUser = () => dispatch => {
	const { isLoggedIn, user, token } = localStorage;

	dispatch(gotUser({ isLoggedIn, user, token }));
};

export const signIn = credential => async dispatch => {
	try {
		const res = await axios.post("/api/user/login", credential);

		const { data, status } = res;
		const message = { msg: data.msg, status };

		localStorage.setItem("token", data.token);
		localStorage.setItem("isLoggedIn", data.isLoggedIn);
		localStorage.setItem("user", data.user);

		dispatch(validUser(data));
		dispatch(loginSuccess(message));
	} catch (err) {
		const { data, status } = err.response;
		const errors = { msg: data.msg, status };

		dispatch(loginFailed(errors));
	}
};

export const signUp = newUser => async dispatch => {
	const res = await axios.post("/api/user/signup", newUser);
	const { data } = res;

	if (data.isSuccess) {
		const { username, password } = newUser;
		const userInfo = { username, password };

		dispatch(signIn(userInfo));
	}
};

export const logOut = () => dispatch => {
	localStorage.removeItem("token");
	localStorage.removeItem("isLoggedIn");
	localStorage.removeItem("user");

	dispatch(logOutUser());
	dispatch(logOutSuccess("Log out successful"));
};
