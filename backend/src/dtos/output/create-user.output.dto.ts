import { $Enums, Responsible, User } from '@prisma/client';
import { dayjsConfig } from 'config/dayjs.config';

type ResponsibleParsed = {
  id: bigint;
  name: string;
  familiarityType: $Enums.TypeFamiliarity;
};

export class CreateUserOutputDTO {
  name: string;
  email: string;
  birthdate: string;
  phone: string;
  // bio: string | null;
  // profilePhoto: Buffer | null;
  instituteName: string;
  profileType: $Enums.ProfileType;
  status: $Enums.UserStatus;
  // isNew: boolean;
  // isMinor: boolean;
  responsible: ResponsibleParsed | null;
  // deviceIp: string;
  createdAt: string;
  updatedAt: string;

  public fromEntityToDto(
    user: User,
    responsible: Responsible | null,
  ): CreateUserOutputDTO {
    this.name = user.name;
    this.email = user.email;
    this.birthdate = dayjsConfig(user.birthdate).format('YYYY-MM-DD');
    this.phone = user.phone;

    // this.bio = user.bio;

    // if (user.profile_photo) {
    //   this.profilePhoto = Buffer.from(user.profile_photo);
    // } else {
    //   this.profilePhoto = null;
    // }
    this.instituteName = user.institute_name || '';
    this.profileType = user.profile_type;
    this.status = user.status;
    // this.isNew = user.is_new;
    // this.isMinor = user.is_minor;

    if (responsible) {
      this.responsible = {
        id: responsible.id,
        name: responsible.name,
        familiarityType: responsible.familiarity_type,
      };
    } else {
      this.responsible = null;
    }

    // this.deviceIp = user.device_ip;
    this.createdAt = dayjsConfig(user.created_at).toISOString();
    this.updatedAt = dayjsConfig(user.updated_at).toISOString();

    return this;
  }
}
