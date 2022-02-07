import React, { Fragment, useState } from 'react'
import Avatar from './shared/Avatar';
import noImage from './../assets/images/no-image.png';

const EmployeeItem = ({ employee }) => {

	const [label, setLabel] = useLocalStorage("label", "");
	const [selectedBackground, setSelectedBackground] = useLocalStorage("selectedBackground", "");
	const [expandAvatar, setExpandAvatar] = useLocalStorage("expandAvatar", false);

	const backgroundOptions = [
		{
			label: "White",
			value: "#fff",
		},
		{
			label: "yellow",
			value: "#f2fc87",
		},
		{
			label: "Dark",
			value: "#8a8a8a",
		},
		{
			label: "Blue",
			value: "#72b9de",
		},
		{
			label: "Green",
			value: "#58BC34",
		},
		{
			label: "Magenta",
			value: "#F700F7",
		},
	];

	const handleSelectChange = (event) => {
		let updatedValue = {
			label: "Magenta",
			value: "#F700F7",
			testValue: 'Veselin'
		};
		updatedValue = { value: event.target.value };
		console.log(selectedBackground);
		setSelectedBackground(selectedBackground => ({
			...selectedBackground,
			...updatedValue
		}));
		console.log(updatedValue);
	}

	const ToggleClass = () => {
		setExpandAvatar(!expandAvatar);
	};


	// Hook to localStorage
	function useLocalStorage(key, initialValue) {
		const [storedValue, setStoredValue] = useState(() => {
			try {
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			} catch (error) {
				console.log(error);
				return initialValue;
			}
		});

		const setValue = (value) => {
			try {
				const valueToStore =
					value instanceof Function ? value(storedValue) : value;
				setStoredValue(valueToStore);
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			} catch (error) {
				console.log(error);
			}
		};
		return [storedValue, setValue];
	}

	return (
		<Fragment>

			<div className="ves-b-employee-list" key={employee.id} style={{
				backgroundColor: selectedBackground.value
			}}>
				{employee.label}
				<div className="list-header">
					<div className="header-actions">
						<select key={employee.uuid} value={employee.selectedBackground} onChange={(event) => handleSelectChange(event)}>
							<option value="" selected disabled hidden>Choose here</option>
							{backgroundOptions.map((option) => (
								<option value={option.value}>{option.label}</option>
							))}
						</select>
						<button onClick={ToggleClass}>Expand Avatar</button>
					</div>

					<Avatar className={expandAvatar ? "item-full" : "item-thumb"} clsName={expandAvatar ? "item-full" : "item-thumb"} src={employee.avatar} alt={employee.title}
						fallback={
							<img className={expandAvatar ? "item-full" : "item-thumb"} src={noImage} style={{ display: "block" }}></img>
						} />
				</div>
				<div className="list-content">
					<p className="content-item">
						<strong>Label:&nbsp;<input type="text" placeholder="Add Label" key={employee.uuid} value={label} onChange={(event) => setLabel(event.target.value)}></input></strong>
					</p>
					<p className="content-item">
						<strong>Label:&nbsp;</strong><span>{label}</span>
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
		</Fragment>
	)
}


export default EmployeeItem;