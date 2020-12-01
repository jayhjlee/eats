import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../components/Input";
import Button from "../components/Button";

import { registerPlace } from "../store/actions/places";

class AddPlaceForm extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			name: "",
			address1: "",
			address2: "",
			city: "",
			state: "",
			postalCode: "",
			country: "",
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addPlace(this.state);
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
		} = this.state;

		return (
			<div className="add-place-form">
				<div className="card">
					<form className="flex wrap">
						<Input
							classes="full-width"
							label="Name"
							value={name}
							action={this.handleChange}
							name="name"
						/>
						<Input
							classes="half-width"
							label="Address 1"
							value={address1}
							action={this.handleChange}
							name="address1"
						/>
						<Input
							classes="half-width"
							label="Address 2"
							value={address2}
							action={this.handleChange}
							name="address2"
						/>
						<Input
							classes="fifth-width"
							label="City"
							value={city}
							action={this.handleChange}
							name="city"
						/>
						<Input
							classes="fifth-width"
							label="State"
							value={state}
							action={this.handleChange}
							name="state"
						/>
						<Input
							classes="fifth-width"
							label="Postal Code"
							value={postalCode}
							action={this.handleChange}
							name="postalCode"
						/>
						<Input
							classes="fifth-width"
							label="Country"
							value={country}
							action={this.handleChange}
							name="country"
						/>
						<Button action={this.handleSubmit} innerText="Add" />
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPlace: placeInfo => dispatch(registerPlace(placeInfo)),
	};
};

export default connect(null, mapDispatchToProps)(AddPlaceForm);
