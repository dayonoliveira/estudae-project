import { Module } from '@nestjs/common';
import { StudentDashboardController } from 'controllers/student-dashboard.controller';
import { StudentDashboardRepository } from 'repositories/student-dashboard.repository';
import { StudentDashboardService } from 'services/student-dashboard.service';

@Module({
  providers: [StudentDashboardService, StudentDashboardRepository],
  controllers: [StudentDashboardController],
})
export class StudentDashboardModule {}
