import api from '../utils/api';

const DatabaseService = {
  getAllDatabases: async () => {
    const response = await api.get('/databases');
    return response.data;
  },
  getDatabaseById: async (id) => {
    const response = await api.get(`/databases/${id}`);
    return response.data;
  },
  createDatabase: async (databaseData) => {
    const response = await api.post('/databases', databaseData);
    return response.data;
  },
  updateDatabase: async (id, databaseData) => {
    const response = await api.put(`/databases/${id}`, databaseData);
    return response.data;
  },
  deleteDatabase: async (id) => {
    const response = await api.delete(`/databases/${id}`);
    return response.data;
  },
};

export default DatabaseService;
