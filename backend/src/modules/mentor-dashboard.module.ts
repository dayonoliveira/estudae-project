import { Module } from '@nestjs/common';
import { MentorDashboardController } from 'controllers/mentor-dashboard.controller';
import { MentorDashboardRepository } from 'repositories/mentor-dashboard.repository';
import { MentorDashboardService } from 'services/mentor-dashboard.service';

@Module({
  providers: [MentorDashboardService, MentorDashboardRepository],
  controllers: [MentorDashboardController],
})
export class MentorDashboardModule {}
