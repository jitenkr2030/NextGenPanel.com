import api from '../utils/api';

const CollaborationService = {
  getAllCollaborations: async () => {
    const response = await api.get('/collaborations');
    return response.data;
  },
  getCollaborationById: async (id) => {
    const response = await api.get(`/collaborations/${id}`);
    return response.data;
  },
  createCollaboration: async (collaborationData) => {
    const response = await api.post('/collaborations', collaborationData);
    return response.data;
  },
  updateCollaboration: async (id, collaborationData) => {
    const response = await api.put(`/collaborations/${id}`, collaborationData);
    return response.data;
  },
  deleteCollaboration: async (id) => {
    const response = await api.delete(`/collaborations/${id}`);
    return response.data;
  },
};

export default CollaborationService;
