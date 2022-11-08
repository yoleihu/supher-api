import { CreateGuardianDto } from "./dto/create-guardian.dto";
import { UpdateGuardianDto } from "./dto/update-guardian.dto";
import { GuardianRepository } from "./repositories/guardian.repository";
import * as bcrypt from "bcrypt";
import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";


@Injectable()
export class GuardianService {
  constructor(private readonly repository: GuardianRepository) {}

  create(createGuardianDto: CreateGuardianDto) {
    const newUser = {
      ...createGuardianDto,
      password: bcrypt.hashSync(createGuardianDto.password, 8),
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

  updatePass(id: number, password: string) {
    const pass= bcrypt.hashSync(password, 8);
    return this.repository.updatePass(id, pass);
  }

  update(id: number, updateGuardianDto: UpdateGuardianDto) {
    return this.repository.update(id, updateGuardianDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  async findOne(email: string) {
    return this.repository.findByEmail(email);
  }
}
