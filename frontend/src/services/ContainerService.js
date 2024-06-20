import api from '../utils/api';

const ContainerService = {
  getAllContainers: async () => {
    const response = await api.get('/containers');
    return response.data;
  },
  getContainerById: async (id) => {
    const response = await api.get(`/containers/${id}`);
    return response.data;
  },
  createContainer: async (containerData) => {
    const response = await api.post('/containers', containerData);
    return response.data;
  },
  updateContainer: async (id, containerData) => {
    const response = await api.put(`/containers/${id}`, containerData);
    return response.data;
  },
  deleteContainer: async (id) => {
    const response = await api.delete(`/containers/${id}`);
    return response.data;
  },
};

export default ContainerService;
