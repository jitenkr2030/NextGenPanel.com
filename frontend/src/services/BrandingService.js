import api from '../utils/api';

const BrandingService = {
  getAllBrandings: async () => {
    const response = await api.get('/brandings');
    return response.data;
  },
  getBrandingById: async (id) => {
    const response = await api.get(`/brandings/${id}`);
    return response.data;
  },
  createBranding: async (brandingData) => {
    const response = await api.post('/brandings', brandingData);
    return response.data;
  },
  updateBranding: async (id, brandingData) => {
    const response = await api.put(`/brandings/${id}`, brandingData);
    return response.data;
  },
  deleteBranding: async (id) => {
    const response = await api.delete(`/brandings/${id}`);
    return response.data;
  },
};

export default BrandingService;
