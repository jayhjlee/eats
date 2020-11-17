import { LOGGED_IN, LOGGED_OUT } from "../types/user";

const initialState = {
	isLoggedIn: false,
	token: null,
	user: null,
	msg: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				token: action.payload.token,
				user: action.payload.user,
				msg: action.payload.msg,
			};
		case LOGGED_OUT:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				user: null,
				msg: "",
			};
		default:
			return state;
	}
}
