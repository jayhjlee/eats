import { FETCH_RESTAURANTS } from "../types/places";

const initialState = {
	restaurants: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_RESTAURANTS:
			return {
				...state,
				restaurants: action.payload,
			};
		default:
			return state;
	}
}
