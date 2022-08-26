import { Module } from '@nestjs/common';
import { BloodCenterService } from './blood-center.service';
import { BloodCenterController } from './blood-center.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BloodCenterRepository } from "./repositories/blood-center.repository";


@Module({
  controllers: [BloodCenterController],
  providers: [BloodCenterService, PrismaService, BloodCenterRepository]
})
export class BloodCenterModule {}
