import { Injectable } from '@nestjs/common';
import { GetVolunteerDashboardDataOutputDTO } from 'dtos/output/volunteer-dashboard-data/get-volunteer-dashboard-data.output.dto';
import { IDashboardService } from 'interfaces/IDashboard';
import { VolunteerDashboardRepository } from 'repositories/volunteer-dashboard.repository';

@Injectable()
export class VolunteerDashboardService implements IDashboardService {
  constructor(
    private volunteerDashboardRepository: VolunteerDashboardRepository,
  ) {}

  getDashboardData(): GetVolunteerDashboardDataOutputDTO {
    const volunteerDashboardResponse: GetVolunteerDashboardDataOutputDTO =
      GetVolunteerDashboardDataOutputDTO.fromVolunteerDashboardDataToDTO(
        this.volunteerDashboardRepository.getDashboardData(),
      );

    return volunteerDashboardResponse;
  }
}
