import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logOut, fetchUser } from "../store/actions/user";

class Header extends Component {
	constructor(props) {
		super(props);

		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		this.props.logOut();
	}

	render() {
		const { user, token, isLoggedIn } = this.props;

		return (
			<section>
				<nav className="navbar flex px-1">
					<h1>Eats</h1>
					<ul>
						{user && token && isLoggedIn ? (
							<li className="mx-1">
								Welcome! {user.username}{" "}
								<a onClick={this.handleLogOut}>Logout</a>
							</li>
						) : null}
					</ul>
				</nav>
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { user, token, isLoggedIn } = state.user;

	return {
		user,
		token,
		isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadUser: () => dispatch(fetchUser()),
		logOut: () => dispatch(logOut()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
