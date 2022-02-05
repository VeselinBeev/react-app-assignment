import React, { useState } from 'react'

export const Avatar = ({ src, alt, fallback }) => {

	const [error, setError] = useState(false);
	const onError = () => {
		setError(true);
	};

	return error ? fallback : <img className="def" src={src} alt={alt} onError={onError} />;
}

export default Avatar