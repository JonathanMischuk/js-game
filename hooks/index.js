import { useState } from 'react';

export const useUpdate = () => {
	const [render, setRender] = useState(Date.now());

	return () => setRender(Date.now());
};
