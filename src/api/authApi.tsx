import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/v1/auth';

interface Credentials {
  email: string;
  password: string;
}

export const registerUser = async (userData: Credentials) => {
  const res = await axios.post(`${API_BASE}/signup`, userData);
  return res.data;
};

export const loginUser = async (credentials: Credentials) => {
  const res = await axios.post(`${API_BASE}/login`, credentials);
  return res.data;
};
