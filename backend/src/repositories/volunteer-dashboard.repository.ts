import { Injectable } from '@nestjs/common';

type ScheduledDonationSuppliesData = {
  title: string;
  willHappenAt: string;
  student: string;
};

type PendingApprovalDonationSuppliesData = {
  title: string;
  description: string;
  student: string;
};

export type VolunteerDashboardData = {
  totalDonationSupplies: number;
  totalScheduledDonationSupplies: number;
  totalPendingApprovalDonationSupplies: number;
  scheduledDonationSupplies: ScheduledDonationSuppliesData[];
  pendingApprovalDonationSupplies: PendingApprovalDonationSuppliesData[];
};

@Injectable()
export class VolunteerDashboardRepository {
  getDashboardData(): VolunteerDashboardData {
    const volunteerDashboardData: VolunteerDashboardData = {
      totalDonationSupplies: 13,
      totalScheduledDonationSupplies: 3,
      totalPendingApprovalDonationSupplies: 10,
      scheduledDonationSupplies: [
        {
          title: 'Livro de Matemática',
          willHappenAt: '2025-12-04',
          student: 'Zigui Rigui Dum da Silva',
        },
      ],
      pendingApprovalDonationSupplies: [
        {
          title: 'Caderno de 12 matérias',
          description:
            'Preciso do caderno para minhas aulas do segundo ano do ensino médio',
          student: 'Kelvin das Palmeiras do Sabiá',
        },
      ],
    };

    return volunteerDashboardData;
  }
}
