import api from '../utils/api';

const CloudService = {
  getAllCloudResources: async () => {
    const response = await api.get('/cloud-resources');
    return response.data;
  },
  getCloudResourceById: async (id) => {
    const response = await api.get(`/cloud-resources/${id}`);
    return response.data;
  },
  createCloudResource: async (cloudResourceData) => {
    const response = await api.post('/cloud-resources', cloudResourceData);
    return response.data;
  },
  updateCloudResource: async (id, cloudResourceData) => {
    const response = await api.put(`/cloud-resources/${id}`, cloudResourceData);
    return response.data;
  },
  deleteCloudResource: async (id) => {
    const response = await api.delete(`/cloud-resources/${id}`);
    return response.data;
  },
};

export default CloudService;
