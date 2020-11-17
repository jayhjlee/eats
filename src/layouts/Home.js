import React, { Component } from "react";
import { connect } from "react-redux";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Login from "./Login";
import Sidebar from "./Sidebar";
import Signup from "./Signup";
import MapWrapper from "./MapWrapper";

import { signIn, fetchUser, signUp } from "../store/actions/user";

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
			coordinates: [-74.0567, 40.7992],
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

		return <Redirect to="/" />;
	}

	handleSignup(e) {
		e.preventDefault();

		const signupInfo = this.state;

		this.props.signup(signupInfo);

		this.setState({
			username: "",
			password: "",
			firstName: "",
			lastName: "",
			email: "",
		});
	}

	render() {
		const { username, password } = this.state;
		const { user, isLoggedIn, token } = this.props;

		return (
			<section>
				<Router>
					<Switch>
						<Route exact path="/">
							<Sidebar />
							<MapWrapper
								user={user}
								isLoggedIn={isLoggedIn}
								token={token}
								coordinates={this.state.coordinates}
							/>
						</Route>
						<Route
							path="/log-in"
							render={() => (
								<Login
									username={username}
									password={password}
									{...this.props}
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
									{...this.props}
									handleChange={this.handleChange}
									handleSubmit={this.handleSignup}
								/>
							)}
						/>
					</Switch>
				</Router>
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { isLoggedIn, token, user } = state.user;

	return {
		isLoggedIn,
		token,
		user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadUser: () => dispatch(fetchUser()),
		login: credential => dispatch(signIn(credential)),
		signup: newUser => dispatch(signUp(newUser)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
