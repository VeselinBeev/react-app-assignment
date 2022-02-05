import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';

const allReducers = combineReducers({
	allEmployees: employeesReducer,
});

export default allReducers;