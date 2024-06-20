import api from '../utils/api';

const TeamManagementService = {
  getAllTeams: async () => {
    const response = await api.get('/teams');
    return response.data;
  },
  getTeamById: async (id) => {
    const response = await api.get(`/teams/${id}`);
    return response.data;
  },
  createTeam: async (teamData) => {
    const response = await api.post('/teams', teamData);
    return response.data;
  },
  updateTeam: async (id, teamData) => {
    const response = await api.put(`/teams/${id}`, teamData);
    return response.data;
  },
  deleteTeam: async (id) => {
    const response = await api.delete(`/teams/${id}`);
    return response.data;
  },
};

export default TeamManagementService;
