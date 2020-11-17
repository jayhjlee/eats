import { FETCH_PLACES } from "../types/places";

const initialState = {
	restaurants: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_PLACES:
			return {
				...state,
				restaurants: action.payload,
			};
		default:
			return state;
	}
}
