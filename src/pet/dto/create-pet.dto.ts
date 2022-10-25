import { Sex, Status } from "@prisma/client"
import { IsNotEmpty } from "class-validator"

export class CreatePetDto {
  id: number

  @IsNotEmpty()
  guardianId: number

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  speciesId: number
  statusToDonation?: Status

  sexOfPet: Sex
  age?: string
  bloodTypeId?: number
  weight?: string
  breedId?: number
}
