import api from '../utils/api';

const BackupService = {
  getAllBackups: async () => {
    const response = await api.get('/backups');
    return response.data;
  },
  getBackupById: async (id) => {
    const response = await api.get(`/backups/${id}`);
    return response.data;
  },
  createBackup: async (backupData) => {
    const response = await api.post('/backups', backupData);
    return response.data;
  },
  updateBackup: async (id, backupData) => {
    const response = await api.put(`/backups/${id}`, backupData);
    return response.data;
  },
  deleteBackup: async (id) => {
    const response = await api.delete(`/backups/${id}`);
    return response.data;
  },
};

export default BackupService;
