import api from '../utils/api';

const PerformanceService = {
  getAllPerformances: async () => {
    const response = await api.get('/performances');
    return response.data;
  },
  getPerformanceById: async (id) => {
    const response = await api.get(`/performances/${id}`);
    return response.data;
  },
  createPerformance: async (performanceData) => {
    const response = await api.post('/performances', performanceData);
    return response.data;
  },
  updatePerformance: async (id, performanceData) => {
    const response = await api.put(`/performances/${id}`, performanceData);
    return response.data;
  },
  deletePerformance: async (id) => {
    const response = await api.delete(`/performances/${id}`);
    return response.data;
  },
};

export default PerformanceService;
