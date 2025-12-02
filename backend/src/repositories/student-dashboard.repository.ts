import { Injectable } from '@nestjs/common';
import { PrismaService } from 'services/prisma.service';

type PrivateLessonData = {
  subject: string;
  willHappenAt: string;
  mentor: string;
};

type SupplyRequestedData = {
  title: string;
  requestDescription: string;
};

export type StudentDashboardData = {
  totalRequests: number;
  totalPrivateLessonsScheduled: number;
  totalSuppliesRequested: number;
  nextPrivateLessons: PrivateLessonData[];
  suppliesRequested: SupplyRequestedData[];
};

@Injectable()
export class StudentDashboardRepository {
  constructor(private prisma: PrismaService) {}

  getDashboardData() {
    const studentDashboardData: StudentDashboardData = {
      totalRequests: 13,
      totalPrivateLessonsScheduled: 3,
      totalSuppliesRequested: 10,
      nextPrivateLessons: [
        {
          subject: 'Matemática',
          willHappenAt: '2025-12-04',
          mentor: 'Zezé Di Camargo e Luciano',
        },
      ],
      suppliesRequested: [
        {
          title: 'Caneta Esferográfica Azul',
          requestDescription: 'Caneta Azul, Azul Caneta',
        },
      ],
    };

    return studentDashboardData;
  }
}
