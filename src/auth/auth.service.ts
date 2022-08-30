import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { GuardianService } from 'src/guardian/guardian.service';
import { JwtService } from '@nestjs/jwt';
import { BloodCenterService } from 'src/blood-center/blood-center.service';

@Injectable()
export class AuthService {
  constructor( private guardianService: GuardianService,
               private bloodCenterService: BloodCenterService,
               private jwtService: JwtService) {}

  async validateGuardian(email: string, pass: string): Promise<any> {
    const user = await this.guardianService.findOne(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateBloodCenter(email: string, pass: string): Promise<any> {
    const user = await this.bloodCenterService.findOne(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}