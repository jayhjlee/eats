import axios from "axios";
import { ADDED_PLACE } from "../types/messages";
import { INVALID_FIELDS } from "../types/errors";

const addPlace = data => ({ type: ADDED_PLACE, payload: data });
const invalidFields = fields => ({ type: INVALID_FIELDS, payload: fields });

export const registerPlace = place => async dispatch => {
	try {
		const res = await axios.post(`/api/places/addPlace`, place);
		const { data } = res;

		dispatch(addPlace(data));
	} catch (err) {
		console.error(err);
	}
};

export const alertInvalidFields = fields => dispatch => {
	dispatch(invalidFields(fields));
};
