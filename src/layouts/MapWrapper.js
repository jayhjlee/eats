import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class MapWrapper extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { isLoggedIn, token, user } = this.props;
		if (!isLoggedIn && !token && !user) return <Redirect to="/log-in" />;

		return <div></div>;
	}
}

export default MapWrapper;
