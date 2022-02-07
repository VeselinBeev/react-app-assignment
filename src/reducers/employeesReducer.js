import { GET_EMPLOYEES, SET_LOADING } from "../actions/types";

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