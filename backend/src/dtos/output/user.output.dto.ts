import { $Enums, User } from '@prisma/client';
import { dayjsConfig } from 'config/dayjs.config';

export class UserOutputDTO {
  name: string;
  email: string;
  birthdate: string;
  phone: string;
  instituteName: string;
  profileType: $Enums.ProfileType;
  status: $Enums.UserStatus;
  createdAt: string;
  updatedAt: string;

  public fromEntityToDto(user: User | null): UserOutputDTO {
    if (user === null) {
      return new UserOutputDTO();
    }

    this.name = user.name;
    this.email = user.email;
    this.birthdate = dayjsConfig(user.birthdate).format('YYYY-MM-DD');
    this.phone = user.phone;
    this.instituteName = user.institute_name || '';
    this.profileType = user.profile_type;
    this.status = user.status;
    this.createdAt = dayjsConfig(user.created_at).toISOString();
    this.updatedAt = dayjsConfig(user.updated_at).toISOString();

    return this;
  }
}
