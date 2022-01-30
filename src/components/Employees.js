import React, { Fragment } from 'react'
import Avatar from './Avatar'

export const Employees = ({employees, loading}) => {
	if(loading) {
		return <h2>loading ...</h2>
	}

	return (
		<Fragment>
			{employees.map(item=>(
				<ul className="list" key={item.id}>
					<li className="list-item" key={1}>{item.uuid}</li>
					<Avatar className="list-item" key={2} avatar={item.avatar}/>
					<li className="list-item" key={3}>{item.title}</li>
					<li className="list-item" key={4}><b>{item.name}</b></li>
					<li className="list-item" key={5}>{item.company}</li>
					<li className="list-item" key={6}>{item.bio}</li>
				</ul>
			))}
		</Fragment>
	)
}
