import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {
	componentDidUpdate() {
		const { errors, messages } = this.props;

		if (errors.status) {
			if (errors.status !== 200) {
				this.props.alert.error(errors.msg);
			}
		}

		if (messages.status) {
			if (messages.status === 200) {
				this.props.alert.success(messages.msg);
			}
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
