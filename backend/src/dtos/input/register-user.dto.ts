/**
 * DTO para registro de usuário
 */
export class RegisterUserDto {
  name: string;
  email: string;
  password: string;
  birthdate: string; // Formato: YYYY-MM-DD
  phone?: string;
  // profileType: ProfileType; // STUDENT, MENTOR ou VOLUNTEER
  bio?: string;
  address?: string;

  // Campos específicos para menores de idade
  isMinor?: boolean;
  guardianName?: string;
  guardianEmail?: string;
  guardianPhone?: string;
  guardianPassword?: string;
}

/**
 * DTO para resposta de registro (sem senha)
 */
export class RegisterUserResponseDto {
  id: string;
  name: string;
  email: string;
  birthdate: Date;
  phone?: string | null;
  // profileType: ProfileType;
  isMinor: boolean;
  guardianId?: string | null;
  createdAt: Date;
}
