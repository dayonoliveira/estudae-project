import { Injectable } from '@nestjs/common';
import { User, UserStatus } from '@prisma/client';
import { dayjsConfig } from 'config/dayjs.config';
import { CreateUserInputDTO } from 'dtos/input/create-user.input.dto';
import { EditUserInputDTO } from 'dtos/input/edit-user.input.dto';
import { CreateUserOutputDTO } from 'dtos/output/create-user.output.dto';
import { UserOutputDTO } from 'dtos/output/user.output.dto';
import { PrismaService } from 'services/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = this.prisma.user.findFirst({
      where: { email },
    });

    return await user;
  }

  async create(user: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
    // let responsible: Responsible | null = null;

    // if (user.isMinor && user.responsible) {
    //   responsible = await this.prisma.responsible
    //     .create({
    //       data: {
    //         name: user.responsible.name,
    //         familiarity_type: user.responsible.familiarityType,
    //       },
    //     })
    //     .then((data: Responsible) => data);
    // }

    const userCreated: User = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        birthdate: user.birthdate,
        phone: user.phone,
        institute_name: user.instituteName,
        profile_type: user.profileType,
        status: UserStatus.ACTIVE,
        responsible_id: null,
        created_at: dayjsConfig().toISOString(),
        updated_at: dayjsConfig().toISOString(),
      },
    });

    return new CreateUserOutputDTO().fromEntityToDto(userCreated, null);
  }

  async getUserByName(name: string): Promise<UserOutputDTO> {
    const user: User | null = await this.prisma.user.findFirst({
      where: { name: name },
    });

    return new UserOutputDTO().fromEntityToDto(user);
  }

  async getUserById(id: bigint): Promise<UserOutputDTO> {
    const user: User | null = await this.prisma.user.findFirst({
      where: { id: id },
    });

    return new UserOutputDTO().fromEntityToDto(user);
  }

  async findAll(): Promise<UserOutputDTO[]> {
    const users: User[] | null = await this.prisma.user.findMany();

    return users.map((user: User) => new UserOutputDTO().fromEntityToDto(user));
  }

  async edit(
    userId: bigint,
    userData: EditUserInputDTO,
  ): Promise<UserOutputDTO> {
    const user: User | null = await this.prisma.user.update({
      where: { id: userId },
      data: {
        name: userData.name,
        phone: userData.phone,
        institute_name: userData.instituteName,
        profile_type: userData.profileType,
      },
    });

    return new UserOutputDTO().fromEntityToDto(user);
  }

  // async addProfilePhoto(
  //   userId: bigint,
  //   photo: Buffer,
  // ): Promise<CreateUserOutputDTO> {
  //   const bytes: Uint8Array<ArrayBuffer> = new Uint8Array(photo);
  //   let responsible: Responsible | null = null;

  //   const user: User = await this.prisma.user.update({
  //     where: { id: userId },
  //     data: {
  //       profile_photo: bytes,
  //     },
  //   });

  //   if (user.responsible_id) {
  //     responsible = await this.prisma.responsible.findUnique({
  //       where: { id: user.responsible_id },
  //     });
  //   }

  //   return new CreateUserOutputDTO().fromEntityToDto(user, responsible);
  // }

  // async getAll() {
  //   return await this.users;
  // }
}
