import api from '../utils/api';

const ResellerService = {
  getAllResellers: async () => {
    const response = await api.get('/resellers');
    return response.data;
  },
  getResellerById: async (id) => {
    const response = await api.get(`/resellers/${id}`);
    return response.data;
  },
  createReseller: async (resellerData) => {
    const response = await api.post('/resellers', resellerData);
    return response.data;
  },
  updateReseller: async (id, resellerData) => {
    const response = await api.put(`/resellers/${id}`, resellerData);
    return response.data;
  },
  deleteReseller: async (id) => {
    const response = await api.delete(`/resellers/${id}`);
    return response.data;
  },
};

export default ResellerService;
