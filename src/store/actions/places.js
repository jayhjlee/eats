import axios from "axios";
import { FETCH_PLACES, SET_COORDINATES } from "../types/places";

const gotPlaces = businesses => ({ type: FETCH_PLACES, payload: businesses });
const setCoordinates = coordinates => ({
	type: SET_COORDINATES,
	payload: coordinates,
});

export const fetchPlaces = location => async dispatch => {
	try {
		const res = await axios.get(
			`/api/places/restaurants/location?city=${location}`
		);
		const {
			data: {
				businesses,
				region: { center },
			},
		} = res;

		dispatch(gotPlaces(businesses));
		dispatch(setCoordinates(center));
	} catch (err) {
		console.error(err);
	}
};
