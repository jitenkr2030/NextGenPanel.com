import api from '../utils/api';

const CMSService = {
  getAllCMS: async () => {
    const response = await api.get('/cms');
    return response.data;
  },
  getCMSById: async (id) => {
    const response = await api.get(`/cms/${id}`);
    return response.data;
  },
  createCMS: async (cmsData) => {
    const response = await api.post('/cms', cmsData);
    return response.data;
  },
  updateCMS: async (id, cmsData) => {
    const response = await api.put(`/cms/${id}`, cmsData);
    return response.data;
  },
  deleteCMS: async (id) => {
    const response = await api.delete(`/cms/${id}`);
    return response.data;
  },
};

export default CMSService;
