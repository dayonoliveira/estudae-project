import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserInputDTO } from '../dtos/input/create-user.input.dto';
import { UserService } from '../services/user.service';
import { Public } from 'decorators/auth.decorator';
import { EditUserInputDTO } from 'dtos/input/edit-user.input.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() user: CreateUserInputDTO) {
    return this.userService.createUser(user);
  }

  // @Public()
  // @Put('/:id/add-profile-photo')
  // @HttpCode(HttpStatus.CREATED)
  // @UseInterceptors(FileInterceptor('profilePhoto'))
  // async addProfilePhoto(
  //   @Param('id') userId: string,
  //   @UploadedFile() profilePhoto: Express.Multer.File,
  // ) {
  //   const userIdParsed: bigint = BigInt(userId);

  //   return this.userService.addProfilePhoto(userIdParsed, profilePhoto.buffer);
  // }

  @Get('/by-name')
  @HttpCode(HttpStatus.OK)
  async getByName(@Param('name') name: string) {
    return this.userService.findByName(name);
  }

  @Get('/by-id/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string) {
    const userIdParsed: bigint = BigInt(id);

    return this.userService.findById(userIdParsed);
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async getAll() {
    return this.userService.findAll();
  }

  @Put(':id/edit')
  @HttpCode(HttpStatus.CREATED)
  async editUserData(
    @Param('id') id: string,
    @Body() editUserInputDto: EditUserInputDTO,
  ) {
    const userIdParsed: bigint = BigInt(id);

    return this.userService.editUserData(userIdParsed, editUserInputDto);
  }

  // @Get(':id')
  // async getById(@Param('id') id: string) {
  //   return this.userService.findById(id);
  // }

  // @Get('profile/me')
  // async getMyProfile(@CurrentUser() user: UserInfoDto) {
  //   return {
  //     success: true,
  //     data: user,
  //   };
  // }
}
