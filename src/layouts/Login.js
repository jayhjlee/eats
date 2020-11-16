import React from "react";
import { Link, Redirect } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = ({
	username,
	password,
	handleChange,
	handleSubmit,
	token,
	user,
	isLoggedIn,
}) => {
	if (isLoggedIn && user && token) return <Redirect to="/" />;
	return (
		<div className="login-form">
			<div className="card">
				<h2>Login</h2>
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
					<Button action={handleSubmit} innerText="Login" />
				</form>
				<div className="sign-up py-1">
					<p className="sign-up-question">
						Don't have an account? <Link to="/sign-up">Join Eats!</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
