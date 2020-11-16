import { LOGGED_IN, LOGGED_OUT } from "../types/user";

const initialState = {
	isLoggedIn: false,
	token: null,
	user: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload.isLoggedIn,
				token: action.payload.token,
				user: action.payload.user,
			};
		case LOGGED_OUT:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				user: null,
			};
		default:
			return state;
	}
}
