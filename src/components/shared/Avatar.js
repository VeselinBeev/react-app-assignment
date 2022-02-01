import React, { useState } from 'react'

export const Avatar = ({ src, alt, fallback }) => {

	const [error, setError] = useState(false);
	const onError = () => {
		setError(true);
	};

	return error ? fallback : <img width="300" height="300" src={src} alt={alt} onError={onError} />;
}

export default Avatar