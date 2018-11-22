import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Signin } from "../../actions";

class SignIn extends Component {
	onSubmit = values => {
		this.props.Signin(values, () => {
			this.props.history.push("/features")
		});
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<fieldset>
						Email:
						<Field
							name="email"
							type="text"
							component="input"
						/>
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
    form: "SignIn"
})(
    connect(
        mapStateToProps,
        { Signin }
    )(SignIn)
);
