import { apiService } from './apiService';

export const productService = {
  getAll: () => apiService.get('/products'),
  getById: (id) => apiService.get(`/products/${id}`),
  create: (data) => apiService.post('/products', data),
  update: (id, data) => apiService.put(`/products/${id}`, data),
  delete: (id) => apiService.delete(`/products/${id}`)
};

