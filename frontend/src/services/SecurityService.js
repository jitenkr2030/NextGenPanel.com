import api from '../utils/api';

const SecurityService = {
  getAllSecurityRules: async () => {
    const response = await api.get('/security');
    return response.data;
  },
  getSecurityRuleById: async (id) => {
    const response = await api.get(`/security/${id}`);
    return response.data;
  },
  createSecurityRule: async (securityData) => {
    const response = await api.post('/security', securityData);
    return response.data;
  },
  updateSecurityRule: async (id, securityData) => {
    const response = await api.put(`/security/${id}`, securityData);
    return response.data;
  },
  deleteSecurityRule: async (id) => {
    const response = await api.delete(`/security/${id}`);
    return response.data;
  },
};

export default SecurityService;
