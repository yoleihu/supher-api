import {
  Body,
  Controller, Delete, Param, Patch, Put, Post
} from "@nestjs/common";
import { AuthService } from '../auth/auth.service';
import { RefreshTokenDto } from "./dto/refresh.token.dto";
import { CreateTokenDto } from "./dto/token.dto";
import { TokenService } from "./token.service";

@Controller("token")
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

    @Put("refresh")
    async refreshToken(@Body() data: RefreshTokenDto){
      const objToken = await this.tokenService.refreshToken(data.oldToken);
      return objToken;
    }

    @Post()
    async createCode(@Body() data: {hash: string, username: string}){
      const objToken = await this.tokenService.save(data.hash, data.username);
      return objToken;
    }

    @Delete("logout")
    async deleteToken(@Body() username: string){
      this.tokenService.delete(username);
    }
}
