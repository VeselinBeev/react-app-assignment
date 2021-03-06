import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Employees from './components/Employees';
import Pagination from './components/shared/Pagination';
import ScrollTop from './components/shared/ScrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees } from './actions/employeesActions';


const App = () => {

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [employeesPerPage] = useState(20);
	const [searchTerm, setSearchTerm] = useState();


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
				},
			}
			)
			.catch((error) => {
				console.log("Err: ", error);
			});

		dispatch(setEmployees(res.data));
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

	const handleSearch = event => {
		setSearchTerm(event.target.value);
	};

	const results = !searchTerm ? currentEmployees : currentEmployees.filter(item => item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

	return (
		<>
			<input className="ves-b-input-search" type="text" placeholder="Search by title..." value={searchTerm} onChange={handleSearch} />
			{/* {results.map((value, key) => {
				return (
					<span key={key.id} >{value.title}</span>
				)
			})} */}
			<Pagination employeesPerPage={employeesPerPage} totalEmployees={employees.length} paginate={paginate} />
			<Employees employees={results} loading={loading} />
			<ScrollTop />
		</>
	);
}

export default App;
