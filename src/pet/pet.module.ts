import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PetController } from "./pet.controller";
import { PetRepository } from "./repositories/pet.repository";
import { PetService } from "./pet.service";


@Module({
  controllers: [PetController],
  providers: [PetService, PrismaService, PetRepository],
  exports: [PetService],
})
export class PetModule {}
