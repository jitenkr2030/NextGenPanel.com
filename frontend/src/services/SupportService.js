import api from '../utils/api';

const SupportService = {
  getAllSupportTickets: async () => {
    const response = await api.get('/support-tickets');
    return response.data;
  },
  getSupportTicketById: async (id) => {
    const response = await api.get(`/support-tickets/${id}`);
    return response.data;
  },
  createSupportTicket: async (supportTicketData) => {
    const response = await api.post('/support-tickets', supportTicketData);
    return response.data;
  },
  updateSupportTicket: async (id, supportTicketData) => {
    const response = await api.put(`/support-tickets/${id}`, supportTicketData);
    return response.data;
  },
  deleteSupportTicket: async (id) => {
    const response = await api.delete(`/support-tickets/${id}`);
    return response.data;
  },
};

export default SupportService;
