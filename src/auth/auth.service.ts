import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { GuardianService } from 'src/guardian/guardian.service';


@Injectable()
export class AuthService {
  constructor( private guardianService: GuardianService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.guardianService.findOne(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
