import React, { Fragment } from 'react'
import Preloader from './shared/Preloader';
import EmployeeItem from './EmployeeItem';

const Employees = ({ employees, loading }) => {

	if (loading) {
		return <Preloader />
	}

	return (
		<Fragment>
			{employees.map((employee) => (
				<EmployeeItem employee={employee} key={employee.uuid}/>
			))}
		</Fragment>
	)
}
export default Employees;