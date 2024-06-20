import api from '../utils/api';

const TranslationService = {
  getAllTranslations: async () => {
    const response = await api.get('/translations');
    return response.data;
  },
  getTranslationById: async (id) => {
    const response = await api.get(`/translations/${id}`);
    return response.data;
  },
  createTranslation: async (translationData) => {
    const response = await api.post('/translations', translationData);
    return response.data;
  },
  updateTranslation: async (id, translationData) => {
    const response = await api.put(`/translations/${id}`, translationData);
    return response.data;
  },
  deleteTranslation: async (id) => {
    const response = await api.delete(`/translations/${id}`);
    return response.data;
  },
};

export default TranslationService;
