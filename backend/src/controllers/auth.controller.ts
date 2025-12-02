import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { LoginDto } from '../dtos/input/login.dto';
import { AuthService } from '../services/auth.service';
import { Public } from 'decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() data: LoginDto) {
    const result = await this.authService.login(data);

    return result;
  }
}
