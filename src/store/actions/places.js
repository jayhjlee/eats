import axios from "axios";
import { FETCH_PLACES } from "../types/places";

const gotPlaces = data => ({ type: FETCH_PLACES, payload: data });

export const fetchPlaces = location => async dispatch => {
	try {
		const res = await axios.get(
			`/api/places/restaurants/location?city=${location}`
		);
		const { data } = res;

		dispatch(gotPlaces(data.businesses));
	} catch (err) {
		console.error(err);
	}
};
