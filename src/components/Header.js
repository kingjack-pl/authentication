import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/HeaderStyle.css";

class Header extends Component {
	renderLinks() {
		if (this.props.authentication) {
			return (
				<div>
					<Link to="signout">Sign Out</Link>
					<Link to="features">Features</Link>
				</div>
			);
		} else {
			return (
				<div>
					<Link to="signup">Sign Up</Link>
					<Link to="signin">Sign In</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="menu">
				<Link to="/">Redux Auth</Link>
				{this.renderLinks()}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authentication: state.auth.authentication
});

export default connect(mapStateToProps)(Header);
