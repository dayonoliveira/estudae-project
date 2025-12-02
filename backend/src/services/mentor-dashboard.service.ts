import { Injectable } from '@nestjs/common';
import { GetMentorDashboardDataOutputDTO } from 'dtos/output/mentor-dashboard-data/get-mentor-dashboard-data.output.dto';
import { IDashboardService } from 'interfaces/IDashboard';
import { MentorDashboardRepository } from 'repositories/mentor-dashboard.repository';

@Injectable()
export class MentorDashboardService implements IDashboardService {
  constructor(private mentorDashboardRepository: MentorDashboardRepository) {}

  getDashboardData(): GetMentorDashboardDataOutputDTO {
    const mentorDashboardResponse: GetMentorDashboardDataOutputDTO =
      GetMentorDashboardDataOutputDTO.fromMentorDashboardDataToDTO(
        this.mentorDashboardRepository.getDashboardData(),
      );

    return mentorDashboardResponse;
  }
}
