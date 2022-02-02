import { GET_EMPLOYEES, SET_LOADING, EMPLOYEES_ERROR } from "../actions/types";

const initialState = {
	employees: null,
	current: null,
	loading: false,
	error: null
}


export default (state = initialState, action) => {
	switch(action.type) {
		case GET_EMPLOYEES:
			return {
				...state,
				employees: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case EMPLOYEES_ERROR:
			return {
				...state,
				error: action.payload
			};
		default: 
			return state;
	}
}