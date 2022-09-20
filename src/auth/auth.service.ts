import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { GuardianService } from 'src/guardian/guardian.service';
import { JwtService } from '@nestjs/jwt';
import { BloodCenterService } from 'src/blood-center/blood-center.service';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor( private guardianService: GuardianService,
               private bloodCenterService: BloodCenterService,
               private jwtService: JwtService,
               private tokenService: TokenService) {}

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
    const payload = { username: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.email);
    return {
      access_token: token,
    };
  }

  async generateLink(email: string, url: string) {
    const payload = { username: email };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, email);
    return (url + "/" + token);
  }

  async create(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
