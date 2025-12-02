import { IDashboardOutputDTO } from 'interfaces/IDashboard';
import { PendingApprovalDonationSuppliesOutputDTO } from './pending-approval-donation-supplies.output.dto';
import { ScheduledDonationSuppliesOutputDTO } from './scheduled-donation-supplies.output.dto';
import { VolunteerDashboardData } from 'repositories/volunteer-dashboard.repository';

export class GetVolunteerDashboardDataOutputDTO implements IDashboardOutputDTO {
  constructor(
    private totalDonationSupplies: number,
    private totalScheduledDonationSupplies: number,
    private totalPendingApprovalDonationSupplies: number,
    private scheduledDonationSupplies: ScheduledDonationSuppliesOutputDTO[],
    private pendingApprovalDonationSupplies: PendingApprovalDonationSuppliesOutputDTO[],
  ) {}

  static fromVolunteerDashboardDataToDTO(
    volunteerDashboardData: VolunteerDashboardData,
  ) {
    return new GetVolunteerDashboardDataOutputDTO(
      volunteerDashboardData.totalDonationSupplies,
      volunteerDashboardData.totalScheduledDonationSupplies,
      volunteerDashboardData.totalPendingApprovalDonationSupplies,
      volunteerDashboardData.scheduledDonationSupplies.map(
        (value) =>
          new ScheduledDonationSuppliesOutputDTO(
            value.title,
            value.willHappenAt,
            value.student,
          ),
      ),
      volunteerDashboardData.pendingApprovalDonationSupplies.map(
        (value) =>
          new PendingApprovalDonationSuppliesOutputDTO(
            value.title,
            value.description,
            value.student,
          ),
      ),
    );
  }
}
