import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { GuardianService } from "./guardian.service";
import { CreateGuardianDto } from "./dto/create-guardian.dto";
import { UpdateGuardianDto } from "./dto/update-guardian.dto";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("guardian")
export class GuardianController {
  constructor(private readonly guardianService: GuardianService,
    private readonly authService: AuthService) {}

  @Post()
  create(@Body() createGuardianDto: CreateGuardianDto) {
    return this.guardianService.create(createGuardianDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  findAll() {
    return this.guardianService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":email")
  findOne(@Param("email") email: string) {
    const guardian = this.guardianService.findOne(email);
    if(guardian) {
      return guardian;
    }
    return new HttpException("O e-mail informado não está cadastrado.", HttpStatus.NOT_FOUND);
  }


  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateGuardianDto: UpdateGuardianDto
  ) {
    return this.guardianService.update(+id, updateGuardianDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.guardianService.remove(+id);
  }

  @Post("generate-link")
  generateLink (@Body() body: any) {
    const guardian = this.guardianService.findOne(body.email);
    if(guardian) {
      return(this.authService.generateLink(body.email, body.hash));
    }
    return new HttpException("O e-mail informado não está cadastrado.", HttpStatus.NOT_FOUND);
  }
}
