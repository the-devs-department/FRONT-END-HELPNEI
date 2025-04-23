import { useState, useEffect } from 'react';
import { DashboardData } from '../types/dashboard';
import { DashboardService } from '../services/api';

export const useDashboard = (companyId: string) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dashboardData = await DashboardService.getDashboardData(companyId);
        setData(dashboardData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companyId]);

  const refreshData = () => {
    setLoading(true);
    DashboardService.getDashboardData(companyId)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return {
    data,
    loading,
    error,
    refreshData
  };
};
