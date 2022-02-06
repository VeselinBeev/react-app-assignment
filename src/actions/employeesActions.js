import { GET_EMPLOYEES, SET_LOADING } from "./types";

// const url = 'http://hiring.rewardgateway.net'

// export const getEmployees = () => async dispatch => {
// 	try {
// 		setLoading();
// 		const res = await fetch(`${url}/list`, {
// 			mode:'no-cors',
// 			method: 'GET',
// 			credentials: 'include',
// 			headers: {
// 				'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
// 			}
// 		});
// 		const data = await res.json();
// 		dispatch({
// 			type: GET_EMPLOYEES,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: EMPLOYEES_ERROR,
// 			payload: error.response.data,
// 		});
// 	}
// };

// export const updateEmployee = employee => async dispatch => {
// 	try {
// 		setLoading();

// 		const res = await fetch(`${url}/list/`, {
// 			body: JSON.stringify(employee),
// 			mode:'no-cors',
// 			method: 'PUT',
// 			credentials: 'include',
// 			headers: {
// 				'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
// 			}
// 		});

// 		const data = await res.json();

// 		dispatch({
// 			type: UPDATE_EMPLOYEE,
// 			payload: data
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: EMPLOYEES_ERROR,
// 			payload: err.response.statusText
// 		});
// 	}
// };

export const getEmployees = (employees) => {
	return {
		type: GET_EMPLOYEES,
		payload: employees,
	};
  };

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};