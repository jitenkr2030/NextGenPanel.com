import api from '../utils/api';

const DomainService = {
  getAllDomains: async () => {
    const response = await api.get('/domains');
    return response.data;
  },
  getDomainById: async (id) => {
    const response = await api.get(`/domains/${id}`);
    return response.data;
  },
  createDomain: async (domainData) => {
    const response = await api.post('/domains', domainData);
    return response.data;
  },
  updateDomain: async (id, domainData) => {
    const response = await api.put(`/domains/${id}`, domainData);
    return response.data;
  },
  deleteDomain: async (id) => {
    const response = await api.delete(`/domains/${id}`);
    return response.data;
  },
};

export default DomainService;
