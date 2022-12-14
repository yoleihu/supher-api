import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto, UpdatePassDto } from './dto/update-blood-center.dto';
import { BloodCenterRepository } from './repositories/blood-center.repository';
import * as bcrypt from "bcrypt";
import { BloodCenterEntity } from './entities/blood-center.entity';
import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";


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

  findAllByLocal(cep: string){
    const digits = cep.split("", 9);
    const firstDigit = digits.at(0);
    const secondDigit = digits.at(1);
    let initlocal: string;
    initlocal = (firstDigit + secondDigit);
    return this.repository.findAllByLocal(initlocal);
  }

  // findOne(id: number) {
  //   return this.repository.findOne(id);
  // }

  update(id: number, updateBloodCenterDto: UpdateBloodCenterDto) {
    return this.repository.update(id, updateBloodCenterDto);
  }

  updatePass(email: string, pass: string) {
    const newPassword= bcrypt.hashSync(pass, 8);
    return this.repository.updatePass(email, newPassword);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  async findEmail(email: string) : Promise<string> {
    return (await this.repository.findByEmail(email)).email;
  }

  async findOne(email: string): Promise<BloodCenterEntity> {
    return (await this.repository.findByEmail(email));
  }
}
