import React, { useState, useEffect } from 'react';
const ScrollTop = () => {

	const [displayScroll, setDisplayScroll] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop)
		return function cleanup() {
			window.removeEventListener('scroll', checkScrollTop)
		}
	})

	const checkScrollTop = () => {
		if (!displayScroll && window.pageYOffset > 50){
			setDisplayScroll(true)
		} else if (displayScroll && window.pageYOffset <= 50) {
			setDisplayScroll(false)
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button className="ves-b-scroll-top" onClick={scrollTop} style={{ display: displayScroll ? 'flex' : 'none' }} />
	);
}

export default ScrollTop;