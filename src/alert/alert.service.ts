import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { AlertRepository } from './repositories/alert.repository';

@Injectable()
export class AlertService {
  constructor(private readonly repository: AlertRepository) {}


  create(createAlertmentDto: CreateAlertDto) {
    return this.repository.create(createAlertmentDto);
  }

  findAllByBloodCenterId(id: number) {
    return this.repository.findAllByBloodCenterId(id);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, createAlertmentDto: CreateAlertDto) {
    return this.repository.update(id, createAlertmentDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
