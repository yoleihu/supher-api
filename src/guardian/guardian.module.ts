import { forwardRef, Module } from "@nestjs/common";
import { GuardianService } from "./guardian.service";
import { GuardianController } from "./guardian.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { GuardianRepository } from "./repositories/guardian.repository";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [GuardianController],
  providers: [GuardianService, PrismaService, GuardianRepository],
  exports: [GuardianService],
})
export class GuardianModule {}
