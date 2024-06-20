import api from '../utils/api';

const AccountingService = {
  getAllAccountingRecords: async () => {
    const response = await api.get('/accounting-records');
    return response.data;
  },
  getAccountingRecordById: async (id) => {
    const response = await api.get(`/accounting-records/${id}`);
    return response.data;
  },
  createAccountingRecord: async (accountingData) => {
    const response = await api.post('/accounting-records', accountingData);
    return response.data;
  },
  updateAccountingRecord: async (id, accountingData) => {
    const response = await api.put(`/accounting-records/${id}`, accountingData);
    return response.data;
  },
  deleteAccountingRecord: async (id) => {
    const response = await api.delete(`/accounting-records/${id}`);
    return response.data;
  },
};

export default AccountingService;
