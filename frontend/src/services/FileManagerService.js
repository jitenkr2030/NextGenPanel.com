import api from '../utils/api';

const FileManagerService = {
  getAllFiles: async () => {
    const response = await api.get('/files');
    return response.data;
  },
  getFileById: async (id) => {
    const response = await api.get(`/files/${id}`);
    return response.data;
  },
  createFile: async (fileData) => {
    const response = await api.post('/files', fileData);
    return response.data;
  },
  updateFile: async (id, fileData) => {
    const response = await api.put(`/files/${id}`, fileData);
    return response.data;
  },
  deleteFile: async (id) => {
    const response = await api.delete(`/files/${id}`);
    return response.data;
  },
};

export default FileManagerService;
