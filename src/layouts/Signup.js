import React from "react";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = ({
	username,
	password,
	email,
	firstName,
	lastName,
	user,
	token,
	isLoggedIn,
	handleChange,
	handleSubmit,
}) => {
	if (isLoggedIn && token && user) return <Redirect to="/" />;

	return (
		<div className="sign-up-form">
			<div className="card">
				<h2>Join Eats!</h2>
				<form>
					<Input
						label="Username"
						name="username"
						action={handleChange}
						value={username}
					/>
					<Input
						label="Password"
						type="password"
						name="password"
						action={handleChange}
						value={password}
					/>
					<Input
						label="Email"
						type="email"
						name="email"
						action={handleChange}
						value={email}
					/>
					<Input
						label="First Name"
						name="firstName"
						action={handleChange}
						value={firstName}
					/>
					<Input
						label="Last Name"
						name="lastName"
						action={handleChange}
						value={lastName}
					/>
					<Button action={handleSubmit} innerText="Sign Up" />
				</form>
			</div>
		</div>
	);
};

export default Signup;
