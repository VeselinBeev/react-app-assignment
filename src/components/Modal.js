import React from 'react'

export const Modal = ({close, open, }) => {
	const toggleModal = open ? "expanded" : "collapsed"
	return (
		<div className={`modal ${toggleModal}`}>
			
		</div>
	)
}
