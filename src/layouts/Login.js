import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = ({ username, password, handleChange, handleSubmit }) => {
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
					<p>
						<a href="/sign-up">Don't have an account?</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
