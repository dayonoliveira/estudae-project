export type IDashboardOutputDTO = object;

export interface IDashboardService {
  getDashboardData(): IDashboardOutputDTO;
}
