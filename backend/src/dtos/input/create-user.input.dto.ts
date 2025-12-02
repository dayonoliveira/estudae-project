import { $Enums, ProfileType } from '@prisma/client';
import { Allow, IsEmail, IsNotEmpty } from 'class-validator';

type ResponsibleParsed = {
  name: string;
  familiarityType: $Enums.TypeFamiliarity;
};

export class CreateUserInputDTO {
  @IsNotEmpty({ message: 'O nome não pode ser nulo ou vazio' })
  name: string;

  @IsNotEmpty({ message: 'O e-mail não pode ser nulo ou vazio' })
  @IsEmail({}, { message: 'O e-mail é inválido' })
  email: string;

  @IsNotEmpty({ message: 'A data de nascimento não pode ser nulo ou vazio' })
  birthdate: string;

  @IsNotEmpty({ message: 'A senha não pode ser nulo ou vazio' })
  password: string;

  @IsNotEmpty({ message: 'O número de telefone não pode ser nulo ou vazio' })
  phone: string;

  @Allow()
  instituteName: string;

  @Allow()
  profileType: ProfileType;

  // @Allow()
  // bio: string | null;

  // @IsNotEmpty({
  //   message: "O valor 'É menor de idade?' não pode ser nulo ou vazio",
  // })
  // isMinor: boolean;

  // @ValidateIf((ctx: CreateUserInputDTO) => ctx.isMinor)
  // @IsNotEmpty({
  //   message:
  //     'Os dados do responsável não podem ser nulos ou vazios dado que o usuário é menor de idade',
  // })
  @Allow()
  responsible: ResponsibleParsed | null;

  // @IsNotEmpty({ message: 'O IP do dispositivo não pode ser nulo ou vazio' })
  // deviceIp: string;
}
