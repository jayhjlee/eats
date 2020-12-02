import { GET_ERRORS, INVALID_FIELDS } from "../types/errors";

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
		case INVALID_FIELDS:
			return {
				...state,
				msg: `Following fields are required: ${action.payload.join(", ")}`,
				status: null,
			};
		default:
			return state;
	}
}
