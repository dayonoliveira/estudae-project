import { $Enums } from '@prisma/client';
import { Allow } from 'class-validator';

export class EditUserInputDTO {
  @Allow()
  name: string;

  @Allow()
  phone: string;

  @Allow()
  instituteName: string;

  @Allow()
  profileType: $Enums.ProfileType;
}
