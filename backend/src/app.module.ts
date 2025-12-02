import { Module } from '@nestjs/common';

import { MentorDashboardModule } from 'modules/mentor-dashboard.module';
import { StudentDashboardModule } from 'modules/student-dashboard.module';
import { VolunteerDashboardModule } from 'modules/volunteer-dashboard.module';
import { UserController } from './controllers/user.controller';
import { PrismaModule } from './modules/prisma.module';
import { UserService } from './services/user.service';
import { AuthModule } from 'modules/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'config/auth-guard.config';
import { UserRepository } from 'repositories/user.repository';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MentorDashboardModule,
    StudentDashboardModule,
    VolunteerDashboardModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
