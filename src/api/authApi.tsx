import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/v1/auth';

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_BASE}/signup`, userData);
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_BASE}/login`, credentials);
  return res.data;
};
