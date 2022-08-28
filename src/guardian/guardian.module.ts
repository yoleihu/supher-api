import { Module } from "@nestjs/common";
import { GuardianService } from "./guardian.service";
import { GuardianController } from "./guardian.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { GuardianRepository } from "./repositories/guardian.repository";

@Module({
  controllers: [GuardianController],
  providers: [GuardianService, PrismaService, GuardianRepository],
  exports: [GuardianService],
})
export class GuardianModule {}
