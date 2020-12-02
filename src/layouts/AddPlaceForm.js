import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";

import { registerPlace, alertInvalidFields } from "../store/actions/places";

class AddPlaceForm extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			name: { key: "Name", value: "", required: true },
			address1: { key: "Address 1", value: "", required: true },
			address2: { key: "Address 2", value: "", required: false },
			city: { key: "City", value: "", required: true },
			state: { key: "State", value: "", required: true },
			postalCode: { key: "Postal Code", value: "", required: true },
			country: { key: "Country", value: "", required: false },
			phone: { key: "Phone", value: "", required: true },
		};
	}

	validate(field) {
		return field.value.length > 0;
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: { ...this.state[e.target.name], value: e.target.value },
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		// Check valid values in each field..
		const requiredFields = Object.values(this.state).filter(
			field => field.required
		);

		const validated = requiredFields.every(this.validate);

		if (validated) {
			this.props.addPlace(this.state);
		} else {
			const invalidFields = requiredFields
				.filter(fieldObj => fieldObj.value.length === 0)
				.map(fieldObj => fieldObj.key);

			this.props.showInvalidFields(invalidFields);
		}
	}

	render() {
		const {
			name,
			address1,
			address2,
			city,
			state,
			postalCode,
			country,
			phone,
		} = this.state;

		const { isLoggedIn, token, user } = this.props;
		if (!isLoggedIn && !token && !user) return <Redirect to="/log-in" />;

		return (
			<div className="add-place-form">
				<div className="card">
					<div className="flex d-content-between">
						<h2 className="title">Add Place</h2>
						<p className="required">* Required</p>
					</div>

					<form className="grid">
						<Input
							classes="name"
							required={true}
							label="Name"
							value={name.value}
							action={this.handleChange}
							name="name"
						/>
						<Input
							classes="address1"
							required={true}
							label="Address 1"
							value={address1.value}
							action={this.handleChange}
							name="address1"
						/>
						<Input
							classes="address2"
							label="Address 2"
							value={address2.value}
							action={this.handleChange}
							name="address2"
						/>
						<Input
							classes="city"
							required={true}
							label="City"
							value={city.value}
							action={this.handleChange}
							name="city"
						/>
						<Input
							classes="state"
							required={true}
							label="State"
							value={state.value}
							action={this.handleChange}
							name="state"
						/>
						<Input
							classes="postal"
							required={true}
							label="Postal Code"
							value={postalCode.value}
							action={this.handleChange}
							name="postalCode"
						/>
						<Input
							classes="country"
							label="Country"
							value={country.value}
							action={this.handleChange}
							name="country"
						/>
						<Input
							classes="phone"
							required={true}
							label="Phone"
							value={phone.value}
							action={this.handleChange}
							name="phone"
						/>
						<Button
							classes="add-place-btn"
							action={this.handleSubmit}
							innerText="Add"
						/>
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPlace: placeInfo => dispatch(registerPlace(placeInfo)),
		showInvalidFields: fields => dispatch(alertInvalidFields(fields)),
	};
};

export default connect(null, mapDispatchToProps)(AddPlaceForm);
