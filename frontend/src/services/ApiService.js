import api from '../utils/api';

const ApiService = {
  getAllApis: async () => {
    const response = await api.get('/apis');
    return response.data;
  },
  getApiById: async (id) => {
    const response = await api.get(`/apis/${id}`);
    return response.data;
  },
  createApi: async (apiData) => {
    const response = await api.post('/apis', apiData);
    return response.data;
  },
  updateApi: async (id, apiData) => {
    const response = await api.put(`/apis/${id}`, apiData);
    return response.data;
  },
  deleteApi: async (id) => {
    const response = await api.delete(`/apis/${id}`);
    return response.data;
  },
};

export default ApiService;
