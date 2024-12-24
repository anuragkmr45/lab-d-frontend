import axios from 'axios';
import { getToken } from './auth';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:8080/api/v1',
});

apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized. Redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
