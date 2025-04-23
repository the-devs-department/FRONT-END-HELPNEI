export interface CityByState {
    state: string;
    cities: string[];
    totalCities: number;
  }
  
  export interface DashboardData {
    citiesCount: number;
    impactedUsers: number;
    totalAffiliates: number;
    mediumGrowth: number;
    createdStores: number;
    citiesByState: CityByState[];
  }
  