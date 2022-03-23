import axios from 'axios';
import constants from '../constants';

const BASE_URL = constants.baseURL;

export default axios.create({
	baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
});
