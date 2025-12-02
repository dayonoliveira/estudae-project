// =====================================================
// LOGIN DTOs
// =====================================================
// Copie para: src/dtos/input/login.dto.ts
// =====================================================

import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * DTO para requisição de login
 */
export class LoginDto {
  @IsEmail()
  @IsNotEmpty({ message: 'O e-mail é obrigatório!' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória!' })
  password: string;
}

/**
 * DTO para resposta de login
 */
export class LoginResponseDto {
  access_token: string;
  // user: UserInfoDto;
}

/**
 * DTO com informações do usuário (sem senha)
 */
export class UserInfoDto {
  id: string;
  name: string;
  email: string;
  birthdate: Date;
  phone?: string | null;
  // profileType: ProfileType;
  bio?: string | null;
  address?: string | null;
  isMinor: boolean;
  guardianId?: string | null;
  createdAt: Date;
}

/**
 * Payload do JWT
 */
export interface JwtPayload {
  sub: string; // ID do usuário
  email: string;
  // profileType: ProfileType;
  // isMinor: boolean;
}
