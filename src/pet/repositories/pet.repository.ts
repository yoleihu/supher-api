import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePetDto } from "../dto/create-pet.dto";
import { PetEntity } from "../entities/pet.entity";

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto): Promise<PetEntity> {
    return this.prisma.pet.create({
      data: createPetDto,
    })
  }

  async findAllByGuardianId(guardianId: number): Promise<PetEntity[]> {
    return this.prisma.pet.findMany({
      where: {
        guardianId,
      },
    });
  }

  findOne(id: number): Promise<PetEntity> {
    return this.prisma.pet.findUnique({
      where: {
        id,
      },
    });
  }

  findOneByNameAndGuardian(name: string, guardianId: number): Promise<PetEntity> {
    return this.prisma.pet.findFirst({
      where: {
        name,
        guardianId
      },
    });
  }

  async update(id: number, createPetDto: CreatePetDto): Promise<PetEntity> {
    return this.prisma.pet.update({
      where: {
        id,
      },
      data: createPetDto,
    })
  }

  async remove(id: number) {
    return this.prisma.pet.delete({
      where: {
        id,
      },
    })
  }
}
