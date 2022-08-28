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

@Controller("guardian")
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @Post()
  create(@Body() createGuardianDto: CreateGuardianDto) {
    return this.guardianService.create(createGuardianDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @Get()
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
