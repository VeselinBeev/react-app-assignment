import React, { useState } from 'react'

export const Filter = ({placeholder, data, name}) => {

	const [filteredData, setFilteredData] = useState([]);
	const [filedWordData, setFiledWordData] = useState("");

	const handleSearchedData = (event) => {
		const filteredWord = event.target.value;
		// set the value to the filtered word soo we can clear the 
		filedWordData(filteredWord);
		const newFilterData = data.filter((value)=> {
			return value.title.toLowerCase().includes(filteredWord.toLowerCase());
		})

		setFilteredData(newFilterData)
		
	}

	return (
		<div className="filter-wrapper">
			<div className="filter-input">
				<input type="text" placeholder={placeholder} onChange={handleSearchedData} />
				<button type="button" onClick={handleSearchedData}>Filter by {name}</button>
			</div>
			{filteredData.map((value, key) => {
				return (
					<span>{value.title}</span>
				)
				
			})}
		</div>
	)
}
