import axios from 'axios';
import { getToken } from './auth';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:8080/api/v1', // Base URL
});

// Add async token resolution for Authorization header
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getToken(); // Retrieve the token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn('No auth token found.'); // Warning for missing token
    }

    return config; // Return updated config
  },
  (error) => {
    console.error('Error in request interceptor:', error); // Handle errors
    return Promise.reject(error);
  }
);

// Handle response errors
apiClient.interceptors.response.use(
  (response) => response, // Pass valid responses through
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized. Redirecting to login...'); // Unauthorized access
    }
    return Promise.reject(error); // Pass errors through
  }
);

export default apiClient;
