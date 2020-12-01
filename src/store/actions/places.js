import axios from "axios";
import { ADD_PLACE } from "../types/places";

const addPlace = place => ({ type: ADD_PLACE, payload: msg });

export const registerPlace = place => async dispatch => {
	try {
		const res = await axios.post(`/api/places/addPlace`, place);

		// console.log(res.data);
	} catch (err) {
		console.error(err);
	}
};
