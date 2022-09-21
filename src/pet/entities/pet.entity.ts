import { BloodType, Breed, Guardian, Pet, Sex, Species, Status } from "@prisma/client";

export class PetEntity implements Pet {
  id: number
  guardianId: number
  name: string
  speciesId: number
  statusToDonation: Status | null
  sexOfPet: Sex
  age: string | null
  bloodTypeId: number | null
  weight: string | null
  breedId: number | null
}
