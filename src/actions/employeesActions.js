import { GET_EMPLOYEES, SET_LOADING } from "./types";

// const url = 'http://hiring.rewardgateway.net'

export const setEmployees = (employees) => {
	return {
		type: GET_EMPLOYEES,
		payload: employees,
	};
};

// Set  employee
export const setEmployee = employee => {
	return {
		type: GET_EMPLOYEES,
		payload: employee,
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
