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
    return this.authService.login(this.guardianService.create(createGuardianDto));
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

  @Get(":email")
  findOne(@Param("email") email: string) {
    return this.guardianService.findOne(email);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateGuardianDto: UpdateGuardianDto
  ) {
    return this.guardianService.update(+id, updateGuardianDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.guardianService.remove(+id);
  }
}
