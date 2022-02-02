import { GET_EMPLOYEES, EMPLOYEES_ERROR, UPDATE_EMPLOYEE, SET_LOADING } from "./types";

const url = 'http://hiring.rewardgateway.net'

export const getEmployees = () => async (dispatch) => {
	try {
		const res = await fetch(`${url}/list/`, {
			mode:'no-cors',
			method: 'GET',
			credentials: 'include',
			headers: {
				'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
			}
		});
		const data = await res.json();
		dispatch({
			type: GET_EMPLOYEES,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: EMPLOYEES_ERROR,
			payload: error.response.data,
		});
	}
};

export const updateEmployee = employee => async dispatch => {
	try {
		setLoading();

		const res = await fetch(`${url}/list/`, {
			body: JSON.stringify(log),
			mode:'no-cors',
			method: 'PUT',
			credentials: 'include',
			headers: {
				'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
			}
		});

		const data = await res.json();

		dispatch({
			type: UPDATE_EMPLOYEE,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: EMPLOYEES_ERROR,
			payload: err.response.statusText
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
