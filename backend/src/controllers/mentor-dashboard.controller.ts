import { Controller, Get } from '@nestjs/common';
import { MentorDashboardService } from 'services/mentor-dashboard.service';

@Controller('/dashboard')
export class MentorDashboardController {
  constructor(private mentorDashboardService: MentorDashboardService) {}

  @Get('/mentor-dashboard-data')
  async getDashboardData() {
    return await this.mentorDashboardService.getDashboardData();
  }
}
