import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
