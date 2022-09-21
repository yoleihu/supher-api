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
  statusToDonation: Status | null

  @IsNotEmpty()
  sexOfPet: Sex
  age: string | null
  bloodTypeId: number | null
  weight: string | null
  breedId: number | null
}
