import React from 'react'

export const Pagination = ({ employeesPerPage, totalEmployees, paginate }) => {
	const pageNumbers = [];

	for (let i = 0; i < Math.ceil(totalEmployees / employeesPerPage); i++) {
		// this give us corrent amount of page numbers
		pageNumbers.push(i);
	
	}
	return (
		<nav>
			<ul className="ves-b-pagination">
				{pageNumbers.map(number => (
					<li key={number} className="pagination-item">
						<a onClick={() => paginate(number)} href="!#" className="pagination-link">
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Pagination