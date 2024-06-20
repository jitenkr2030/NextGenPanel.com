import api from '../utils/api';

const AIService = {
  getAllAIModels: async () => {
    const response = await api.get('/ai-models');
    return response.data;
  },
  getAIModelById: async (id) => {
    const response = await api.get(`/ai-models/${id}`);
    return response.data;
  },
  createAIModel: async (aiModelData) => {
    const response = await api.post('/ai-models', aiModelData);
    return response.data;
  },
  updateAIModel: async (id, aiModelData) => {
    const response = await api.put(`/ai-models/${id}`, aiModelData);
    return response.data;
  },
  deleteAIModel: async (id) => {
    const response = await api.delete(`/ai-models/${id}`);
    return response.data;
  },
};

export default AIService;
