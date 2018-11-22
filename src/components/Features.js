import React, { Component } from "react";
import requireAuth from "./requireAuth";

class Features extends Component {
	render() {
		return <div>Secret Feature</div>;
	}
}

export default requireAuth(Features);
