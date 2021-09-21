import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = 'https://prohelp.unidevgroup.ru/api/v1';

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

$api.interceptors.request.use((config) => {
	if (localStorage.getItem('token')) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	}
	return config;
})

$api.interceptors.response.use((config) => {
	return config;
}, async (error) => {
	const originalRequest = error.config;
	if (error.response.status === 401 && error.config && !error.config._isRetry) {
		originalRequest._isRetry = true;
		try {
			// const response = await axios.post<AuthResponse>(`${API_URL}/auth/token/`, { withCredentials: true });
			// const response = await AuthService.setProfile();
			// console.log(response);
			// localStorage.setItem('token', response.data.access);
			return $api.request(originalRequest);
		} catch (e) {
			console.log('НЕ АВТОРИЗОВАН')
		}
	}
	throw error;
})

export default $api; 