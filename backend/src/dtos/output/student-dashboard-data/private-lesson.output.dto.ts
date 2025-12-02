export class PrivateLessonOutputDTO {
  constructor(
    private subject: string,
    private willHappenAt: string,
    private mentor: string,
  ) {}
}
