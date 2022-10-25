import { forwardRef, Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PetController } from "./pet.controller";
import { PetRepository } from "./repositories/pet.repository";
import { PetService } from "./pet.service";
import { AuthModule } from "src/auth/auth.module";


@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [PetController],
  providers: [PetService, PrismaService, PetRepository],
  exports: [PetService],
})
export class PetModule {}
