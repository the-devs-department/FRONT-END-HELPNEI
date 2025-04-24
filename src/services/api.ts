import { DashboardData } from '../types/dashboard';

const API_URL = 'http://localhost:3000';

export const DashboardService = {
  async getDashboardData(companyId: string): Promise<DashboardData> {
    try {
      const response = await fetch(`${API_URL}/dashboard/${companyId}`);

      if (response.status === 404) {
        throw new Error(`Rota não encontrada: /dashboard/${companyId}`);
      }

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: Falha ao carregar dados do dashboard`);
      }

      const data = await response.json();

      // Validação opcional do formato (defensivo)
      if (!data || typeof data !== 'object') {
        throw new Error('Dados de resposta inválidos do servidor.');
      }

      return data;
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
      throw error instanceof Error ? error : new Error('Erro desconhecido');
    }
  }
};
