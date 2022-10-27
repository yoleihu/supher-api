import { Species } from "@prisma/client"
import { IsNotEmpty } from "class-validator"

export class CreateAlertDto {
  @IsNotEmpty()
  data: Date
  @IsNotEmpty()
  bloodCenterId: number
  @IsNotEmpty()
  bloodType: string
  @IsNotEmpty()
  species: Species
}
