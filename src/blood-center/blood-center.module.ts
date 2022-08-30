import { forwardRef, Module } from '@nestjs/common';
import { BloodCenterService } from './blood-center.service';
import { BloodCenterController } from './blood-center.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BloodCenterRepository } from "./repositories/blood-center.repository";
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [BloodCenterController],
  providers: [BloodCenterService, PrismaService, BloodCenterRepository],
  exports: [BloodCenterService],
})
export class BloodCenterModule {}
