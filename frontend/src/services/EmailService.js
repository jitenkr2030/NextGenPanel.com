import api from '../utils/api';

const EmailService = {
  getAllEmails: async () => {
    const response = await api.get('/emails');
    return response.data;
  },
  getEmailById: async (id) => {
    const response = await api.get(`/emails/${id}`);
    return response.data;
  },
  createEmail: async (emailData) => {
    const response = await api.post('/emails', emailData);
    return response.data;
  },
  updateEmail: async (id, emailData) => {
    const response = await api.put(`/emails/${id}`, emailData);
    return response.data;
  },
  deleteEmail: async (id) => {
    const response = await api.delete(`/emails/${id}`);
    return response.data;
  },
};

export default EmailService;
