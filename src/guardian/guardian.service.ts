import { Injectable } from "@nestjs/common";
import { CreateGuardianDto } from "./dto/create-guardian.dto";
import { UpdateGuardianDto } from "./dto/update-guardian.dto";
import { GuardianRepository } from "./repositories/guardian.repository";
import * as bcrypt from "bcrypt";

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

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateGuardianDto: UpdateGuardianDto) {
    return this.repository.update(id, updateGuardianDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
