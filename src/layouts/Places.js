import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Places extends Component {
	render() {
		const { isLoggedIn, token, user, restaurants, coordinates } = this.props;
		if (!isLoggedIn && !token && !user) return <Redirect to="/log-in" />;

		return <div>List of Places</div>;
	}
}

export default Places;
