import { IDashboardOutputDTO } from 'interfaces/IDashboard';
import { PendingApprovalPrivateLessonOutputDTO } from './pending-approval-private-lesson.output.dto';
import { ScheduledPrivateLessonOutputDTO } from './scheduled-private-lesson.output.dto';
import { MentorDashboardData } from 'repositories/mentor-dashboard.repository';

export class GetMentorDashboardDataOutputDTO implements IDashboardOutputDTO {
  constructor(
    private totalPrivateLessons: number,
    private totalScheduledPrivateLessons: number,
    private totalPendingApprovalPrivateLessons: number,
    private nextPrivateLessons: ScheduledPrivateLessonOutputDTO[],
    private pendingApprovalPrivateLessons: PendingApprovalPrivateLessonOutputDTO[],
  ) {}

  static fromMentorDashboardDataToDTO(
    mentorDashboardData: MentorDashboardData,
  ) {
    return new GetMentorDashboardDataOutputDTO(
      mentorDashboardData.totalPrivateLessons,
      mentorDashboardData.totalScheduledPrivateLessons,
      mentorDashboardData.totalPendingApprovalPrivateLessons,
      mentorDashboardData.nextPrivateLessons.map(
        (value) =>
          new ScheduledPrivateLessonOutputDTO(
            value.subject,
            value.willHappenAt,
            value.student,
          ),
      ),
      mentorDashboardData.pendingApprovalPrivateLessons.map(
        (value) =>
          new PendingApprovalPrivateLessonOutputDTO(
            value.subject,
            value.wantedToHappenAt,
            value.student,
          ),
      ),
    );
  }
}
