import { Injectable } from '@nestjs/common';

type ScheduledPrivateLessonData = {
  subject: string;
  willHappenAt: string;
  student: string;
};

type PendingApprovalPrivateLessonData = {
  subject: string;
  wantedToHappenAt: string;
  student: string;
};

export type MentorDashboardData = {
  totalPrivateLessons: number;
  totalScheduledPrivateLessons: number;
  totalPendingApprovalPrivateLessons: number;
  nextPrivateLessons: ScheduledPrivateLessonData[];
  pendingApprovalPrivateLessons: PendingApprovalPrivateLessonData[];
};

@Injectable()
export class MentorDashboardRepository {
  getDashboardData(): MentorDashboardData {
    const mentorDashboardData: MentorDashboardData = {
      totalPrivateLessons: 13,
      totalScheduledPrivateLessons: 3,
      totalPendingApprovalPrivateLessons: 10,
      nextPrivateLessons: [
        {
          subject: 'Matemática',
          willHappenAt: '2025-12-04',
          student: 'Homer Simpson',
        },
      ],
      pendingApprovalPrivateLessons: [
        {
          subject: 'Informática',
          wantedToHappenAt: '2026-01-10',
          student: 'Leandro e Leonardo',
        },
      ],
    };

    return mentorDashboardData;
  }
}
