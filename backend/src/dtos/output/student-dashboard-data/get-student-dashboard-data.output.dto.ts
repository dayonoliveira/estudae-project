/* eslint-disable prettier/prettier */
import { IDashboardOutputDTO } from 'interfaces/IDashboard';
import { PrivateLessonOutputDTO } from './private-lesson.output.dto';
import { SupplyRequestedOutputDTO } from './supply-requested.output.dto';
import { StudentDashboardData } from 'repositories/student-dashboard.repository';

export class GetStudentDashboardDataOutputDTO implements IDashboardOutputDTO {
  constructor(
    private totalRequests: number,
    private totalPrivateLessonsScheduled: number,
    private totalSuppliesRequested: number,
    private nextPrivateLessons: PrivateLessonOutputDTO[],
    private suppliesRequested: SupplyRequestedOutputDTO[],
  ) {}

  static fromStudentDashboardDataToDTO(
    studentDashboardData: StudentDashboardData,
  ) {
    return new GetStudentDashboardDataOutputDTO(
      studentDashboardData.totalRequests,
      studentDashboardData.totalPrivateLessonsScheduled,
      studentDashboardData.totalSuppliesRequested,
      studentDashboardData.nextPrivateLessons.map(
        (value) =>
          new PrivateLessonOutputDTO(
            value.subject,
            value.willHappenAt,
            value.mentor,
          ),
      ),
      studentDashboardData.suppliesRequested.map(
        (value) =>
          new SupplyRequestedOutputDTO(value.title, value.requestDescription),
      ),
    );
  }
}
