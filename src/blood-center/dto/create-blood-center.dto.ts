import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateBloodCenterDto {
  id: number;

  @IsNotEmpty()
  cnpj: string;

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
