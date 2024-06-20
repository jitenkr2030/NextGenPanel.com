import api from '../utils/api';

const ServerService = {
  getAllServers: async () => {
    const response = await api.get('/servers');
    return response.data;
  },
  getServerById: async (id) => {
    const response = await api.get(`/servers/${id}`);
    return response.data;
  },
  createServer: async (serverData) => {
    const response = await api.post('/servers', serverData);
    return response.data;
  },
  updateServer: async (id, serverData) => {
    const response = await api.put(`/servers/${id}`, serverData);
    return response.data;
  },
  deleteServer: async (id) => {
    const response = await api.delete(`/servers/${id}`);
    return response.data;
  },
};

export default ServerService;
