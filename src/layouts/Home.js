import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Sidebar from "./Sidebar";
import Signup from "./Signup";

import { signIn, fetchUser } from "../store/actions/user";

class Home extends Component {
	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignup = this.handleSignup.bind(this);

		this.state = {
			username: "",
			password: "",
			firstName: "",
			lastName: "",
			email: "",
		};
	}

	componentDidMount() {
		this.props.loadUser();
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleLogin(e) {
		e.preventDefault();

		const loginCredential = {
			username: this.state.username,
			password: this.state.password,
		};

		this.props.login(loginCredential);

		this.setState({
			username: "",
			password: "",
		});
	}

	handleSignup(e) {
		e.preventDefault();

		const signupInfo = this.state;

		console.log(signupInfo);
	}

	render() {
		const { username, password } = this.state;
		const { isLoggedIn, token, user } = this.props;

		return (
			<section>
				{isLoggedIn && token && user ? (
					<Router>
						<Sidebar />
					</Router>
				) : (
					<Router>
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Login
										username={username}
										password={password}
										handleChange={this.handleChange}
										handleSubmit={this.handleLogin}
									/>
								)}
							/>
							<Route
								path="/sign-up"
								render={() => (
									<Signup
										{...this.state}
										handleChange={this.handleChange}
										handleSubmit={this.handleSignup}
									/>
								)}
							/>
						</Switch>
					</Router>
				)}
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { isLoggedIn, token, username } = state.user;

	return {
		isLoggedIn,
		token,
		user: username,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadUser: () => dispatch(fetchUser()),
		login: credential => dispatch(signIn(credential)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
