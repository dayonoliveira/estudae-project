import { Injectable } from '@nestjs/common';
import { GetStudentDashboardDataOutputDTO } from 'dtos/output/student-dashboard-data/get-student-dashboard-data.output.dto';
import { IDashboardService } from 'interfaces/IDashboard';
import { StudentDashboardRepository } from 'repositories/student-dashboard.repository';

@Injectable()
export class StudentDashboardService implements IDashboardService {
  constructor(private studentDashboardRepository: StudentDashboardRepository) {}

  getDashboardData(): GetStudentDashboardDataOutputDTO {
    const studentDashboardResponse: GetStudentDashboardDataOutputDTO =
      GetStudentDashboardDataOutputDTO.fromStudentDashboardDataToDTO(
        this.studentDashboardRepository.getDashboardData(),
      );

    return studentDashboardResponse;
  }
}
