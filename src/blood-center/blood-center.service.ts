import { Injectable } from '@nestjs/common';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';
import { BloodCenterRepository } from './repositories/blood-center.repository';
import * as bcrypt from "bcrypt";
import { BloodCenterEntity } from './entities/blood-center.entity';

@Injectable()
export class BloodCenterService {
  constructor(private readonly repository: BloodCenterRepository) {}

  create(createBloodCenterDto: CreateBloodCenterDto) {
    const newUser = {
      ...createBloodCenterDto,
      password: bcrypt.hashSync(createBloodCenterDto.password, 8),
    };
    return this.repository.create(newUser);
  }

  findAll() {
    return this.repository.findAll();
  }

  // findOne(id: number) {
  //   return this.repository.findOne(id);
  // }

  update(id: number, updateBloodCenterDto: UpdateBloodCenterDto) {
    return this.repository.update(id, updateBloodCenterDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  async findOne(email: string): Promise<BloodCenterEntity | undefined> {
    return this.repository.findByEmail(email);
  }
}
