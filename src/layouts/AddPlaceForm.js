import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
							asterisk={true}
							label="Name"
							value={name}
							action={this.handleChange}
							name="name"
						/>
						<Input
							classes="address1"
							asterisk={true}
							label="Address 1"
							value={address1}
							action={this.handleChange}
							name="address1"
						/>
						<Input
							classes="address2"
							asterisk={true}
							label="Address 2"
							value={address2}
							action={this.handleChange}
							name="address2"
						/>
						<Input
							classes="city"
							asterisk={true}
							label="City"
							value={city}
							action={this.handleChange}
							name="city"
						/>
						<Input
							classes="state"
							asterisk={true}
							label="State"
							value={state}
							action={this.handleChange}
							name="state"
						/>
						<Input
							classes="postal"
							asterisk={true}
							label="Postal Code"
							value={postalCode}
							action={this.handleChange}
							name="postalCode"
						/>
						<Input
							classes="country"
							label="Country"
							value={country}
							action={this.handleChange}
							name="country"
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
	};
};

export default connect(null, mapDispatchToProps)(AddPlaceForm);
