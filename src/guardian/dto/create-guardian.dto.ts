import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateGuardianDto {
  id: number;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  telephone: string;

  @IsNotEmpty()
  cep: string | null;

  @IsNotEmpty()
  address: string | null;

  @IsNotEmpty()
  password: string;
}
