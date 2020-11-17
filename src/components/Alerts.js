import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

class Alerts extends Component {
	componentDidMount() {
		this.props.alert.show("showing alert");
	}
	render() {
		return <Fragment></Fragment>;
	}
}

export default withAlert()(Alerts);
