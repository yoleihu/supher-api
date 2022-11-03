import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpException } from '@nestjs/common';
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
    return this.bloodCenterService.create(createBloodCenterDto);
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

  @UseGuards(JwtAuthGuard)
  @Get('list-nears/:cep')
  findAllByLocal(@Param('cep') cep: string) {
    return this.bloodCenterService.findAllByLocal(cep);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloodCenterDto: UpdateBloodCenterDto) {
    return this.bloodCenterService.update(+id, updateBloodCenterDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodCenterService.remove(+id);
  }

  @Post("generate-link")
  generateLink (@Body() body: any) {
    if(this.bloodCenterService.findOne(body.email)) {
      return(this.authService.generateLink(body.email, body.url))
    }
    return new HttpException("O e-mail informado não está cadastrado.", 404);
  }
}
