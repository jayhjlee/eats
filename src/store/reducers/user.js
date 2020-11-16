import { LOGGED_IN, LOGGED_OUT } from "../types/user";

const initialState = {
	isLoggedIn: false,
	token: null,
	username: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				token: action.payload.token,
				username: action.payload.username,
			};
		case LOGGED_OUT:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				username: "",
			};
		default:
			return state;
	}
}
