import { useState, useEffect, useCallback } from 'react';
import { DashboardData } from '../types/dashboard';
import { DashboardService } from '../services/api';

export const useDashboard = (companyId: string) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // limpa erros anteriores
    try {
      const dashboardData = await DashboardService.getDashboardData(companyId);
      setData(dashboardData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro desconhecido ao buscar dados'));
    } finally {
      setLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refreshData = useCallback((): void => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refreshData
  };
};
