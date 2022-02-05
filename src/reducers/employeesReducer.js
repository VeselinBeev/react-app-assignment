import { GET_EMPLOYEES, SET_LOADING } from "../actions/types";

const initialState = {
	employees: [],
	loading: false
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
		default: 
			return state;
	}
}