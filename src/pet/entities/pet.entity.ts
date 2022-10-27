import { Guardian, Pet, Sex, Status } from "@prisma/client";

export class PetEntity implements Pet {
  id: number
  guardianId: number
  name: string
  species: string
  statusToDonation: Status | null
  sexOfPet: Sex
  age: string | null
  bloodType: string | null
  weight: string | null
  breed: string | null
}
