import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			email: "",
			firstName: "",
			lastName: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log("Signup!");
	}
	render() {
		const { username, password, email, firstName, lastName } = this.state;
		return (
			<div className="sign-up-form">
				<div className="card">
					<h2>Join Eats!</h2>
					<form>
						<Input
							label="Username"
							name="username"
							action={this.handleChange}
							value={username}
						/>
						<Input
							label="Password"
							type="password"
							name="password"
							action={this.handleChange}
							value={password}
						/>
						<Button action={this.handleSubmit} innerText="Sign Up" />
					</form>
				</div>
			</div>
		);
	}
}

export default Signup;
