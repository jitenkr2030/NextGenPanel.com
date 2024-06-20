import api from '../utils/api';

const LocalizationService = {
  getAllLocalizations: async () => {
    const response = await api.get('/localizations');
    return response.data;
  },
  getLocalizationById: async (id) => {
    const response = await api.get(`/localizations/${id}`);
    return response.data;
  },
  createLocalization: async (localizationData) => {
    const response = await api.post('/localizations', localizationData);
    return response.data;
  },
  updateLocalization: async (id, localizationData) => {
    const response = await api.put(`/localizations/${id}`, localizationData);
    return response.data;
  },
  deleteLocalization: async (id) => {
    const response = await api.delete(`/localizations/${id}`);
    return response.data;
  },
};

export default LocalizationService;
