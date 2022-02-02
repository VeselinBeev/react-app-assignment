import React, { Fragment } from 'react'
import Avatar from './shared/Avatar'
import noImage from './../assets/images/no-image.png'
export const Employee = ({ employee }) => {
	const handleSubmitLabel = (event) => {
		return event.target.value;
	}
	return (
		<Fragment>

			<div className="list-group">
				<div className="list-item" key={7}>Label: {employee?.label}</div>
				<input type="text" placeholder="Add Label for this element" value={employee.label} onChange={handleSubmitLabel}></input>
			</div>

			<div className="list-item" key={employee.id} >Avatar:
				<Avatar className="list-item" src={employee.avatar} fallback={
					<img src={noImage} style={{ width: '300px', height: '300px', display: "block" }}></img>
				} />
			</div>

			<div className="list-item" key={employee.id}>Title: <b>{employee.title}</b></div>
			
			<div className="list-item" key={employee.id}>Name: <b>{employee.name}</b></div>
			
			<div className="list-item" key={employee.id}>company: {employee.company}</div>
			
			<div className="list-item" key={employee.id}>{employee.bio}</div>
		</Fragment>
	);
}

export default Employee;