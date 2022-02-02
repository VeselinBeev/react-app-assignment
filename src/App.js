import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Employees } from './components/Employees';
import Pagination from './components/shared/Pagination';
import { Filter } from './components/Filter';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [employeesPerPage] = useState(20);

	// make request
	useEffect(() => {
		const fetchEmployees = async () => {
			setLoading(true);
			const res = await axios.get('https://hiring.rewardgateway.net/list', { 
				
				mode:'no-cors',
				method: 'GET',
				credentials: 'include',
				headers: {
					'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
					}
			 	}
			);
			setEmployees(res.data);
			setLoading(false);
		}
		fetchEmployees();
	}, []);
	
	// get current post calculations
	const indexOfLastEmployee = currentPage * employeesPerPage;
	const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
	const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee)

	// change page 
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// var formdata = new FormData();

	// var requestOptions = {
	// 	mode:'no-cors',
	// 	method: 'GET',
	// 	credentials: 'include',
	// 	headers: {
	// 	  'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
	// 	},
	// 	// if this is POST or PUT
	// 	// body: formdata,
	// 	// redirect: 'follow',
	// };

	return (
		<Provider store={store}>
			<div className="App">
				<Filter data={currentEmployees}  placeholder="Filter by Title..." name="Title" />
				<Pagination employeesPerPage={employeesPerPage} totalEmployees={employees.length} paginate={paginate} />
				<Employees employees={currentEmployees} loading={loading} />
			</div>
		 </Provider>
	);
}

export default App;
