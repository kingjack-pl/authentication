import React, { Component } from "react";
import { connect } from "react-redux";
import { Signout } from "../../actions";

class SignOut extends Component {
	componentDidMount() {
		this.props.Signout();
	}

	render() {
		return <div />;
	}
}

export default connect(
	null,
	{ Signout }
)(SignOut);
