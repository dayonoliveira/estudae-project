import { Module } from '@nestjs/common';
import { VolunteerDashboardController } from 'controllers/volunteer-dashboard.controller';
import { VolunteerDashboardRepository } from 'repositories/volunteer-dashboard.repository';
import { VolunteerDashboardService } from 'services/volunteer-dashboard.service';

@Module({
  providers: [VolunteerDashboardService, VolunteerDashboardRepository],
  controllers: [VolunteerDashboardController],
})
export class VolunteerDashboardModule {}
