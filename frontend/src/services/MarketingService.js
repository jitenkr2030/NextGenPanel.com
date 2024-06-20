import api from '../utils/api';

const MarketingService = {
  getAllMarketingCampaigns: async () => {
    const response = await api.get('/marketing-campaigns');
    return response.data;
  },
  getMarketingCampaignById: async (id) => {
    const response = await api.get(`/marketing-campaigns/${id}`);
    return response.data;
  },
  createMarketingCampaign: async (marketingData) => {
    const response = await api.post('/marketing-campaigns', marketingData);
    return response.data;
  },
  updateMarketingCampaign: async (id, marketingData) => {
    const response = await api.put(`/marketing-campaigns/${id}`, marketingData);
    return response.data;
  },
  deleteMarketingCampaign: async (id) => {
    const response = await api.delete(`/marketing-campaigns/${id}`);
    return response.data;
  },
};

export default MarketingService;
