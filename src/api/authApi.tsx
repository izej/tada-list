import axios from 'axios';
import { AUTH_API_URL } from './apiConfig';

interface Credentials {
  email: string;
  password: string;
}

export const registerUser = async (userData: Credentials) => {
  const res = await axios.post(`${AUTH_API_URL}/signup`, userData);
  return res.data;
};

export const loginUser = async (credentials: Credentials) => {
  const res = await axios.post(`${AUTH_API_URL}/login`, credentials);
  return res.data;
};
