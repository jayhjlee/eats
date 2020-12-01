import axios from "axios";
import { ADDED_PLACE } from "../types/messages";

const addPlace = data => ({ type: ADDED_PLACE, payload: data });

export const registerPlace = place => async dispatch => {
	try {
		const res = await axios.post(`/api/places/addPlace`, place);
		const { data } = res;

		dispatch(addPlace(data));
	} catch (err) {
		console.error(err);
	}
};
