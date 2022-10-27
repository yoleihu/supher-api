import { Guardian, Pet, Sex, Species, Status } from "@prisma/client";

export class PetEntity implements Pet {
  id: number
  guardianId: number
  name: string
  species: Species
  statusToDonation: Status | null
  sexOfPet: Sex
  age: string | null
  bloodType: string | null
  weight: string | null
  breed: string | null
}
