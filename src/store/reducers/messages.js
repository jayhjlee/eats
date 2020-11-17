import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types/messages";

const initialState = {
	msg: "",
	status: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				msg: action.payload.msg,
				status: action.payload.status,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				msg: "",
				status: null,
			};
		default:
			return state;
	}
}
