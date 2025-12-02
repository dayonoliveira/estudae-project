import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  JwtPayload,
  LoginDto,
  LoginResponseDto,
} from '../dtos/input/login.dto';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(data: LoginDto): Promise<LoginResponseDto> {
    if (!data.email || !data.password) {
      throw new BadRequestException('Email e senha são obrigatórios');
    }

    const user = await this.userService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    const isPasswordValid = await this.comparePasswords(
      data.password,
      user.password,
    );

    if (!isPasswordValid) {
      console.log('foi aqui?', isPasswordValid);
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    const payload: JwtPayload = {
      sub: user.id.toString(),
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
    };
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string | null,
  ): Promise<boolean> {
    if (hashedPassword === null) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}
