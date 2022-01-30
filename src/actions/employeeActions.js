import { GET_EMPLOYEES, EMPLOYEES_ERROR } from "./types";

export const getEmployees = () => async (dispatch) => {
	try {
		const res = await fetch("http://hiring.rewardgateway.net/list");
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
