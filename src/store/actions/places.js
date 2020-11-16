import axios from "axios";
import { FETCH_PLACES } from "../types/places";

const gotPlaces = data => ({ type: FETCH_PLACES, payload: data });

export const fetchPlaces = () => async dispatch => {
	try {
		const res = await axios.get(`/api/places/restaurants?location=${location}`);
		const { data } = res;

		console.log(data);
	} catch (err) {
		console.error(err);
	}
};
