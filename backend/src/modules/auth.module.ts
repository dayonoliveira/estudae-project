import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { UserService } from 'services/user.service';
import { UserRepository } from 'repositories/user.repository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.AUTH_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepository],
  exports: [AuthService],
})
export class AuthModule {}
