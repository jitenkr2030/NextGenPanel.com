import api from '../utils/api';

const AnalyticsService = {
  getAllAnalytics: async () => {
    const response = await api.get('/analytics');
    return response.data;
  },
  getAnalyticsById: async (id) => {
    const response = await api.get(`/analytics/${id}`);
    return response.data;
  },
  createAnalytics: async (analyticsData) => {
    const response = await api.post('/analytics', analyticsData);
    return response.data;
  },
  updateAnalytics: async (id, analyticsData) => {
    const response = await api.put(`/analytics/${id}`, analyticsData);
    return response.data;
  },
  deleteAnalytics: async (id) => {
    const response = await api.delete(`/analytics/${id}`);
    return response.data;
  },
};

export default AnalyticsService;
