import { DashboardData } from '../types/dashboard';

const API_URL = 'http://localhost:3000';

export const DashboardService = {
  async getDashboardData(companyId: string): Promise<DashboardData> {
    try {
      const response = await fetch(`${API_URL}/dashboard/${companyId}`);
      
      if (!response.ok) {
        throw new Error('Falha ao carregar dados do dashboard');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
      throw error;
    }
  }
};
