import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {
	componentDidUpdate(prevProps) {
		const { errors } = this.props;

		if (errors.status !== null && errors.status !== 200) {
			this.props.alert.error(errors.msg);
		}
	}

	render() {
		return <Fragment></Fragment>;
	}
}

const mapStateToProps = state => {
	const { errors } = state;
	const { msg } = state.user;

	return { msg, errors };
};

export default connect(mapStateToProps, null)(withAlert()(Alerts));
