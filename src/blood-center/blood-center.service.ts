import { Injectable } from '@nestjs/common';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';
import { BloodCenterRepository } from './repositories/blood-center.repository';
import * as bcrypt from "bcrypt";

@Injectable()
export class BloodCenterService {
  constructor(private readonly repository: BloodCenterRepository) {}

  create(createGuardianDto: CreateBloodCenterDto) {
    const newUser = {
      ...createGuardianDto,
      password: bcrypt.hashSync(createGuardianDto.password, 8),
    };
    return this.repository.create(newUser);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateGuardianDto: UpdateBloodCenterDto) {
    return this.repository.update(id, updateGuardianDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
