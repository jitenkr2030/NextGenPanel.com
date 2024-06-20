import api from '../utils/api';

const NetworkingService = {
  getAllNetworks: async () => {
    const response = await api.get('/networks');
    return response.data;
  },
  getNetworkById: async (id) => {
    const response = await api.get(`/networks/${id}`);
    return response.data;
  },
  createNetwork: async (networkData) => {
    const response = await api.post('/networks', networkData);
    return response.data;
  },
  updateNetwork: async (id, networkData) => {
    const response = await api.put(`/networks/${id}`, networkData);
    return response.data;
  },
  deleteNetwork: async (id) => {
    const response = await api.delete(`/networks/${id}`);
    return response.data;
  },
};

export default NetworkingService;
