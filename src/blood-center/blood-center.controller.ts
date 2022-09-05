import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { BloodCenterService } from './blood-center.service';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { AuthGuard } from "@nestjs/passport";
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('blood-center')
export class BloodCenterController {
  constructor(private readonly bloodCenterService: BloodCenterService,
    private readonly authService: AuthService) {}

  @Post()
  create(@Body() createBloodCenterDto: CreateBloodCenterDto) {
    return this.authService.login(this.bloodCenterService.create(createBloodCenterDto));
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  findAll() {
    return this.bloodCenterService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.bloodCenterService.findOne(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloodCenterDto: UpdateBloodCenterDto) {
    return this.bloodCenterService.update(+id, updateBloodCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodCenterService.remove(+id);
  }
}
