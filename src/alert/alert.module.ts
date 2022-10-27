import { forwardRef, Module } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertController } from './alert.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlertRepository } from './repositories/alert.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [AlertController],
  providers: [AlertService, PrismaService, AlertRepository],
  exports: [AlertService],
})
export class AlertModule {}
