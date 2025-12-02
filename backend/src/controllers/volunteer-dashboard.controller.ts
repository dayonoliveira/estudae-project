import { Controller, Get } from '@nestjs/common';
import { VolunteerDashboardService } from 'services/volunteer-dashboard.service';

@Controller('/dashboard')
export class VolunteerDashboardController {
  constructor(private volunteerDashboardService: VolunteerDashboardService) {}

  @Get('/volunteer-dashboard-data')
  async getDashboardData() {
    return await this.volunteerDashboardService.getDashboardData();
  }
}
