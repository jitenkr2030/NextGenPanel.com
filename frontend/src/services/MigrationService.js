import api from '../utils/api';

const MigrationService = {
  getAllMigrations: async () => {
    const response = await api.get('/migrations');
    return response.data;
  },
  getMigrationById: async (id) => {
    const response = await api.get(`/migrations/${id}`);
    return response.data;
  },
  createMigration: async (migrationData) => {
    const response = await api.post('/migrations', migrationData);
    return response.data;
  },
  updateMigration: async (id, migrationData) => {
    const response = await api.put(`/migrations/${id}`, migrationData);
    return response.data;
  },
  deleteMigration: async (id) => {
    const response = await api.delete(`/migrations/${id}`);
    return response.data;
  },
};

export default MigrationService;
