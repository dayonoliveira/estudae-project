export class PendingApprovalPrivateLessonOutputDTO {
  constructor(
    private subject: string,
    private wantedToHappenAt: string,
    private student: string,
  ) {}
}
