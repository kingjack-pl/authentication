import axios from "axios";
import { AUTH_USER, AUTH_ERR } from "./types";

export const Signup = (formData, callback) => async dispatch => {
	try {
		const response = await axios.post(
			"http://localhost:3069/signup",
			formData
		);
		dispatch({
			type: AUTH_USER,
			payload: response.data.token
		});
		localStorage.setItem("token", response.data.token);
		callback();
	} catch (e) {
		dispatch({
			type: AUTH_ERR,
			payload: "Error: Email is in use"
		});
	}
};

export const Signin = (formData, callback) => async dispatch => {
	try {
		const response = await axios.post(
			"http://localhost:3069/signin",
			formData
		);
		dispatch({
			type: AUTH_USER,
			payload: response.data.token
		});
		localStorage.setItem("token", response.data.token);
		callback();
	} catch (e) {
		dispatch({
			type: AUTH_ERR,
			payload: "Error: There is no such user"
		});
	}
};

export const Signout = () => {
	localStorage.removeItem("token");

	return {
		type: AUTH_USER,
		payload: ""
	};
};

// Using promise

// export const Signup = (formData, callback) => dispatch => {
//     axios.post("http://localhost:3069/signup", formData).then(
//         response => {
//             dispatch({
//                 type: AUTH_USER,
//                 payload: response.data.token
//             });
//             localStorage.setItem("token", response.data.token);
//             callback();
//         },
//         err => {
//             dispatch({
//                 type: AUTH_ERR,
//                 payload: "Error: Email is in use"
//             });
//         }
//     );
// };

// export const Signin = (formData, callback) => dispatch => {
//     axios.post("http://localhost:3069/signin", formData).then(
//         response => {
//             dispatch({
//                 type: AUTH_USER,
//                 payload: response.data.token
//             });
//             localStorage.setItem("token", response.data.token);
//             callback();
//         },
//         err => {
//             dispatch({
//                 type: AUTH_ERR,
//                 payload: "Error: There is no such user"
//             });
//         }
//     );
// };
