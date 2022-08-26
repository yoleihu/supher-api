import { IsEmail, IsNotEmpty, IsString, IsOptional } from "class-validator";

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

  @IsOptional()
  cep: string | null;

  @IsOptional()
  address: string | null;

  @IsNotEmpty()
  password: string;
}
