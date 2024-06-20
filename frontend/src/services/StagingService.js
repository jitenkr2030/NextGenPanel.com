import api from '../utils/api';

const StagingService = {
  getAllStages: async () => {
    const response = await api.get('/stages');
    return response.data;
  },
  getStageById: async (id) => {
    const response = await api.get(`/stages/${id}`);
    return response.data;
  },
  createStage: async (stageData) => {
    const response = await api.post('/stages', stageData);
    return response.data;
  },
  updateStage: async (id, stageData) => {
    const response = await api.put(`/stages/${id}`, stageData);
    return response.data;
  },
  deleteStage: async (id) => {
    const response = await api.delete(`/stages/${id}`);
    return response.data;
  },
};

export default StagingService;
