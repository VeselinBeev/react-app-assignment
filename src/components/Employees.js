import React, { Fragment } from 'react'
import Avatar from './shared/Avatar';
import noImage from './../assets/images/no-image.png';
import Preloader from './shared/Preloader';
const Employees = ({ employees, loading, bgColor }) => {
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
		return <Preloader />
	}

	const handleSelectDropdown = (event) => {

		const currentBgColor = event.target.value;
		return currentBgColor;
	}
	const expandAvatar = (event) => {

	}

		const handleSubmitLabel = (event) => {
		return event.target.value;
	}

	return (
		<Fragment>
			{employees.map(employee => (
				<div className="ves-b-employee-list" key={employee.uuid}>

					<div className="list-header">
						<div className="header-actions">
							<section key={employee.id} style={{
								backgroundColor: bgColor,
							}}>
								<select key={7} onClick={handleSelectDropdown}>
									{backgroundOptions.map((option) => (
										<option value={option.value}>{option.label}</option>
									))}
								</select>
							</section>
							<button onClick={expandAvatar}>Expand Avatar</button>
						</div>
						<Avatar className="header-item" src={employee.avatar} alt={employee.title}
							fallback={
								<img src={noImage} style={{ display: "block" }}></img>
							} />
					</div>
					<div className="list-content">
						<div className="content-input">
							<input type="text" placeholder="Add Label" value={employee?.label} onChange={handleSubmitLabel} ></input>
						</div>
						<p className="content-item">
							<strong>Label:&nbsp;</strong>
							<div className="list-item">{employee?.label}</div>
						</p>
						<p className="content-item">
							<strong>Title:&nbsp;</strong>
							<span>{employee.title}</span>
						</p>
						<p className="content-item">
							<strong>Name:&nbsp;</strong>
							<span>{employee.name}</span>
						</p>
						<p className="content-item">
							<strong>Company:&nbsp;</strong>
							<span>{employee.company}</span>
						</p>
						<p className="content-item">
							<strong>Bio:&nbsp;</strong>
							<span>{employee.bio}</span>
						</p>
					</div>
				</div>

			))}
		</Fragment>
	)
}
export default Employees;