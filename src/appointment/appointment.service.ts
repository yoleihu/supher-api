import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { AppointmentRepository } from './repositories/appointment.repository';

@Injectable()
export class AppointmentService {
  constructor(private readonly repository: AppointmentRepository) {}


  create(createAppointmentDto: CreateAppointmentDto) {
    return this.repository.create(createAppointmentDto);
  }

  findAllByBloodCenter(bloodCenterId: number) {
    return this.repository.findAllByBloodCenter(bloodCenterId);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, createAppointmentDto: CreateAppointmentDto) {
    return this.repository.update(id, createAppointmentDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
