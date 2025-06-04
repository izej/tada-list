export const API_BASE_URL = 'http://localhost:8080/api/v1';

export const AUTH_API_URL = `${API_BASE_URL}/auth`;

export const TASKS_API_URL = `${API_BASE_URL}/tasks`;

export const PROFILE_API_URL = `${API_BASE_URL}/profile`;

import axios from 'axios';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
