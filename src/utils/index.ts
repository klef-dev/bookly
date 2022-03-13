import axios from 'axios';

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  timeout: 5000,
});

export { apiRequest };
