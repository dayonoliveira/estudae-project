import { Controller, Get } from '@nestjs/common';
import { StudentDashboardService } from 'services/student-dashboard.service';

@Controller('/dashboard')
export class StudentDashboardController {
  constructor(private studentDashboardService: StudentDashboardService) {}

  @Get('/student-dashboard-data')
  async getDashboardData() {
    return await this.studentDashboardService.getDashboardData();
  }
}
