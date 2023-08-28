import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const apiService = {
  get: (endpoint) => axios.get(`${API_BASE_URL}${endpoint}`),
  post: (endpoint, data) => axios.post(`${API_BASE_URL}${endpoint}`, data),
  put: (endpoint, data) => axios.put(`${API_BASE_URL}${endpoint}`, data),
  delete: (endpoint) => axios.delete(`${API_BASE_URL}${endpoint}`)
};