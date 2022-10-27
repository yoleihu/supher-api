import { forwardRef, Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetRepository } from 'src/pet/repositories/pet.repository';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [AppointmentController],
  providers: [AppointmentService, PrismaService, PetRepository],
  exports: [AppointmentService],
})
export class AppointmentModule {}
