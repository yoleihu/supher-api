import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { BloodCenterService } from "src/blood-center/blood-center.service";
import { GuardianService } from "src/guardian/guardian.service";
import { CreateTokenDto } from "./dto/token.dto";
import { TokenRepository } from "./token.repository";

@Injectable()
export class TokenService {
  constructor(
    private readonly repository: TokenRepository,
    private guardianService: GuardianService,
    private bloodCenterService: BloodCenterService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService) {}

  async save (hash: string, username: string) {
    const objtoken = await this.repository.findOne(username);
    const newToken = {hash: hash, username: username}
    if (objtoken){
      this.repository.update(objtoken.username ,newToken);
    }else{
      this.repository.create(newToken);
    }
  }

  async refreshToken(oldToken: string){
    const objToken = await this.repository.findOneByHash(oldToken);
    if(objToken){
      const usuario = (await this.guardianService.findOne(objToken.username)|| await this.bloodCenterService.findOne(objToken.username));
      return this.authService.login(usuario);
    } else {
      return new HttpException("Usuário não autorizado.", HttpStatus.UNAUTHORIZED)
    }
  }

  update(username: string, createTokenDto: CreateTokenDto) {
    return this.repository.update(username, createTokenDto);
  }

  delete(username: string) {
    this.repository.delete(username);
  }
}
