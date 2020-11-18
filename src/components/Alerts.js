import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {
	componentDidUpdate(prevProps) {
		const { errors, messages } = this.props;

		console.log("re-rendered");

		if (prevProps.errors !== errors) {
			this.props.alert.error(errors.msg);
		}

		if (prevProps.messages !== messages) {
			this.props.alert.success(messages.msg);
		}
	}

	render() {
		return <Fragment></Fragment>;
	}
}

const mapStateToProps = state => {
	const { errors, messages } = state;
	const { msg } = state.user;

	return { msg, errors, messages };
};

export default connect(mapStateToProps, null)(withAlert()(Alerts));
