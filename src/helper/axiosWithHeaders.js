import axios from 'axios';

const axiosWithHeaders = () => {
	const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'false';

	const instance = axios.create({
		headers: {
			Authorization: token
		}
	});

	return instance;
};

export default axiosWithHeaders;
