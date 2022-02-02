import React, { Fragment } from 'react'
import Avatar from './shared/Avatar'
import noImage from './../assets/images/no-image.png'
import { Preloader } from './shared/Preloader';
import Employee from './Employee';
export const Employees = ({ employees, loading, bgColor }) => {
	const backgroundOptions = [
		{
			label: "yellow",
			value: "yellow",
		},
		{
			label: "Black",
			value: "#000",
		},
		{
			label: "White",
			value: "#fff",
		},
		{
			label: "Blue",
			value: "blue",
		},
	];
	if (loading) {
		return <Preloader/>
	}

	const handleSelectDropdown = (event) => {

		const currentBgColor = event.target.value;
		return currentBgColor;
	}
	
	return (
		<Fragment>
			{employees.map(employee => (
				
				<ul className="list" key={employee.id} style={{
					backgroundColor: bgColor,
				}}>
					
					<Employee employee={employee} />
					<select key={7} onClick={handleSelectDropdown}>
						{backgroundOptions.map((option) => (
							<option value={option.value}>{option.label}</option>
						))}
					</select>
				</ul>
			))}
		</Fragment>
	)
}
