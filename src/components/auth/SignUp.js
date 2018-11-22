import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Signup } from "../../actions";

class SignUp extends Component {
	onSubmit = values => {
		this.props.Signup(values, () => {
			this.props.history.push("/features");
		});
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<fieldset>
						Email:
						<Field name="email" type="text" component="input" />
						Password:
						<Field
							name="password"
							type="password"
							component="input"
						/>
					</fieldset>
					<p>{this.props.errorMessage}</p>
					<button>Sign In!</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	errorMessage: state.auth.errorMessage
});

export default reduxForm({
	form: "SignUp"
})(
	connect(
		mapStateToProps,
		{ Signup }
	)(SignUp)
);
