import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';
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

  updatePass(id: number, password: string) {
    const pass= bcrypt.hashSync(password, 8);
    return this.repository.updatePass(id, pass);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  async findOne(email: string) {
    const bc = this.repository.findByEmail(email);
    if(bc) {
      return bc;
    }
    return new HttpException("Usuário não autorizado.", HttpStatus.NOT_FOUND);
  }
}
