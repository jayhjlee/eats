import axios from "axios";
import { LOGGED_IN, LOGGED_OUT } from "../types/user";

const validUser = data => ({ type: LOGGED_IN, payload: data });
const gotUser = data => ({ type: LOGGED_IN, payload: data });
const logOutUser = () => ({ type: LOGGED_OUT });

export const fetchUser = () => dispatch => {
	const { isLoggedIn, user, token } = localStorage;

	dispatch(gotUser({ isLoggedIn, user, token }));
};

export const signIn = credential => async dispatch => {
	const res = await axios.post("/api/user/login", credential);
	const { data } = res;

	localStorage.setItem("token", data.token);
	localStorage.setItem("isLoggedIn", data.isLoggedIn);
	localStorage.setItem("user", data.user);

	dispatch(validUser(data));
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
};
