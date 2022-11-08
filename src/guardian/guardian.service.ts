import { CreateGuardianDto } from "./dto/create-guardian.dto";
import { UpdateGuardianDto, UpdatePassDto } from "./dto/update-guardian.dto";
import { GuardianRepository } from "./repositories/guardian.repository";
import * as bcrypt from "bcrypt";
import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { GuardianEntity } from "./entities/guardian.entity";



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

  updatePass(email: string, pass: string) {
    const newPassword= bcrypt.hashSync(pass, 8);
    return this.repository.updatePass(email, newPassword);
  }

  update(id: number, updateGuardianDto: UpdateGuardianDto) {
    return this.repository.update(id, updateGuardianDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }

  async findEmail(email: string) : Promise<string> {
    return (await this.repository.findByEmail(email)).email;
  }

  async findOne(email: string) : Promise<GuardianEntity> {
    return (await this.repository.findByEmail(email));
  }
}
