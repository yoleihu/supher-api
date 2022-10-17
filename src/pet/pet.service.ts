import { Injectable } from "@nestjs/common";
import { CreatePetDto } from "./dto/create-pet.dto";
import { PetRepository } from "./repositories/pet.repository";

@Injectable()
export class PetService {
  constructor(private readonly repository: PetRepository) {}

  create(createPetDto: CreatePetDto) {
    return this.repository.create(createPetDto);
  }

  findAllByGuardianId(id: number) {
    return this.repository.findAllByGuardianId(id);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  findOneByNameAndGuardian(name: string, guardianId: number) {
    return this.repository.findOneByNameAndGuardian(name, guardianId);
  }

  update(id: number, createPetDto: CreatePetDto) {
    return this.repository.update(id, createPetDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
