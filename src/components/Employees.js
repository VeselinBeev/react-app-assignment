import React, { Fragment } from 'react'
import Avatar from './shared/Avatar'
import noImage from './../assets/images/no-image.png'
export const Employees = ({employees, loading, bgColor }) => {

	if(loading) {
		return <h2>loading ...</h2>
	}

	const handleSelectDropdown = (event) => {
		return event.target.value;
	}
	const handleSubmitLabel = (event) => {
		return event.target.value;
	}
	return (
		<Fragment>
				{employees.map(employee => (
				<ul className="list" key={employee.id} style={{
					backgroundColor: bgColor,
				  }}>
					<div className="list-input-wrapper">
						<input type="text" placeholder="Add Label for this element" value={employee.label} onChange={handleSubmitLabel}></input>
						<li className="list-item" key={7}>Label: {employee?.label}</li>
					</div>
					<li className="list-item" key={1}>ID:{employee.uuid}</li>
					<li className="list-item" key={2} >Avatar: 
					<Avatar className="list-item" src={employee?.avatar} fallback={
						<img src={noImage} style={{ width: '300px', height: '300px', display:"block" }}></img>
					}/>
					</li>
					
					<li className="list-item" key={3}>Title: <b>{employee.title}</b></li>
					<li className="list-item" key={4}>Name: <b>{employee.name}</b></li>
					<li className="list-item" key={5}>company: {employee.company}</li>
					<li className="list-item" key={6}>{employee.bio}</li>
					<select key={7} onClick={handleSelectDropdown}>
						<option value="'yellow'">Yellow</option>
						<option value="'#000'">Black</option>
						<option value="'#fff'">White</option>
						<option value="'blue'">Blue</option>
					</select>
				</ul>
			))}
		</Fragment>
	)
}
