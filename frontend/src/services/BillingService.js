import api from '../utils/api';

const BillingService = {
  getAllBillingRecords: async () => {
    const response = await api.get('/billing-records');
    return response.data;
  },
  getBillingRecordById: async (id) => {
    const response = await api.get(`/billing-records/${id}`);
    return response.data;
  },
  createBillingRecord: async (billingData) => {
    const response = await api.post('/billing-records', billingData);
    return response.data;
  },
  updateBillingRecord: async (id, billingData) => {
    const response = await api.put(`/billing-records/${id}`, billingData);
    return response.data;
  },
  deleteBillingRecord: async (id) => {
    const response = await api.delete(`/billing-records/${id}`);
    return response.data;
  },
};

export default BillingService;
