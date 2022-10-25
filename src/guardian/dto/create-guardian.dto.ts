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

  @IsOptional()
  number: string | null;

  @IsOptional()
  district: string | null;

  @IsOptional()
  city: string | null;

  @IsOptional()
  state: string | null;


  @IsNotEmpty()
  password: string;
}
