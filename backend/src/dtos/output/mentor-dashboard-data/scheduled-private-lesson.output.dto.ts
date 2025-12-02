export class ScheduledPrivateLessonOutputDTO {
  constructor(
    private subject: string,
    private willHappenAt: string,
    private student: string,
  ) {}
}
