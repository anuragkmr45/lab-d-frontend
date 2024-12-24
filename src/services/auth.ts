// src/services/auth.ts
import apiClient from '../lib/axios';
import { setToken, removeToken } from '@/lib/auth';

const signin = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/signin', { email, password });
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error while signing:', error);
    throw new Error('Failed to signin. Please try again later.');
  }
};

const signup = async (userData: {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}) => {
  try {
    const response = await apiClient.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error while signup:', error);
    throw new Error('Failed to signup. Please try again later.');
  }
};

const signout = async () => {
  try {
    await apiClient.post('/signout');
    removeToken();
  } catch (error) {
    console.error('Error while signout:', error);
    throw new Error('Failed to signout. Please try again later.');
  }
};

export { signin, signup, signout }
