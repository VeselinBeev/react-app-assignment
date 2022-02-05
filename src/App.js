import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import  Employees  from './components/Employees';
import Pagination from './components/shared/Pagination';
import ScrollTop from './components/shared/ScrollTop';
import { Filter } from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from './actions/employeesActions';


const App = () => {

	// const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [employeesPerPage] = useState(20);

	const employees = useSelector((state) => state.allEmployees.employees);
	const dispatch = useDispatch();

	const fetchEmployees = async () => {
		setLoading(true);
		const res = await axios
			.get('https://hiring.rewardgateway.net/list', {
					mode: 'no-cors',
					method: 'GET',
					credentials: 'include',
					headers: {
						'Authorization': 'Basic ' + btoa('medium' + ":" + 'medium'),
					}
				}
			)
			.catch((err) => {
				console.log("Err: ", err);
			});
		dispatch(getEmployees(res.data));
		setLoading(false);
	};

	useEffect(() => {
		fetchEmployees();
	}, []);
	
	// get current post calculations
	const indexOfLastEmployee = currentPage * employeesPerPage;
	const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
	const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee)

	// change page 
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	return (
		<>
			<Filter data={currentEmployees}  placeholder="Filter by Title..." name="Title" />
			<Pagination employeesPerPage={employeesPerPage} totalEmployees={employees.length} paginate={paginate} />
			<Employees employees={currentEmployees} loading={loading} />
			<ScrollTop/>
		 </>
	);
}

export default App;
