import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import rootReducer from "./reducers/";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";

const defaultState = {
	auth: {
		authentication: localStorage.getItem("token")
	}
};

const store = createStore(
	rootReducer,
	defaultState,
	applyMiddleware(ReduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Welcome} />
				<Route path="/features" component={Features} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signout" component={SignOut} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
