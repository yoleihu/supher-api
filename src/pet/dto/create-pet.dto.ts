import { Sex, Species, Status  } from "@prisma/client"
import { IsNotEmpty, IsOptional } from "class-validator"

export class CreatePetDto {
  @IsNotEmpty()
  guardianId: number

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  species: Species

  @IsOptional()
  statusToDonation: Status | null

  @IsOptional()
  sexOfPet: Sex

  @IsOptional()
  age: string | null

  @IsOptional()
  bloodType: string | null

  @IsOptional()
  weight: string | null

  @IsOptional()
  breed: string | null
}

