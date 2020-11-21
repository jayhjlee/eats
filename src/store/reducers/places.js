import { FETCH_PLACES, SET_COORDINATES } from "../types/places";

const initialState = {
	restaurants: [],
	coordinates: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_PLACES:
			return {
				...state,
				restaurants: action.payload,
			};
		case SET_COORDINATES:
			return {
				...state,
				coordinates: [action.payload.longitude, action.payload.latitude],
			};
		default:
			return state;
	}
}
