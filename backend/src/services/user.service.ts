import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInputDTO } from 'dtos/input/create-user.input.dto';
import { EditUserInputDTO } from 'dtos/input/edit-user.input.dto';
import { CreateUserOutputDTO } from 'dtos/output/create-user.output.dto';
import { UserRepository } from 'repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
    user.password = await bcrypt.hash(user.password, 10);

    const response: CreateUserOutputDTO = await this.userRepository
      .create(user)
      .catch((error) => {
        throw new BadRequestException(error);
      });

    return response;
  }

  // async addProfilePhoto(
  //   userId: bigint,
  //   photo: Buffer,
  // ): Promise<CreateUserOutputDTO> {
  //   const response: CreateUserOutputDTO = await this.userRepository
  //     .addProfilePhoto(userId, photo)
  //     .catch((error) => {
  //       throw new BadRequestException(error);
  //     });

  //   return response;
  // }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }

  async findByName(name: string) {
    return await this.userRepository.getUserByName(name);
  }

  async editUserData(userId: bigint, userData: EditUserInputDTO) {
    return await this.userRepository.edit(userId, userData);
  }
}
