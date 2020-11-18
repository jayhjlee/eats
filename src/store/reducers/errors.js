import { GET_ERRORS, CLEAR_ERRORS } from "../types/errors";

const initialState = {
	msg: "",
	status: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ERRORS:
			return {
				...state,
				msg: action.payload.msg,
				status: action.payload.status,
			};
		default:
			return state;
	}
}
