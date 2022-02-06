import { GET_EMPLOYEES, SET_LOADING, CURRENT_EMPLOYEE } from "../actions/types";

const initialState = {
	employees: [
		{
			id: null,
			avatar: null,			
			label: '',
			title: '',
			name: '',
			employee: '',
			bio: '',
			bgColor :{
				label: '',
				value: ''
			}
		}
	],
	employee:null,
	loading: false
}

const employeeRedus = (state = initialState, action) => {
	switch(action.type) {
		case GET_EMPLOYEES:
			return {
				...state,
				employees: action.payload,
				loading: false
			};
		
		case CURRENT_EMPLOYEE:
			return {
				...state,
				employee: action.payload,
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
export default employeeRedus;