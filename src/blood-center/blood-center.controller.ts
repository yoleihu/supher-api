import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpException, HttpStatus, Put } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { BloodCenterService } from './blood-center.service';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { AuthGuard } from "@nestjs/passport";
import { UpdateBloodCenterDto, UpdatePassDto } from './dto/update-blood-center.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BloodCenterEntity } from './entities/blood-center.entity';

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

  @Get('email/:email')
  findOne(@Param('email') email: string) {
    const bc = this.bloodCenterService.findEmail(email);
    if(bc) {
      return bc;
    }
    return new HttpException("O e-mail informado não está cadastrado.", HttpStatus.NOT_FOUND);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  findEmail(@Param('email') email: string) {
    const bc = this.bloodCenterService.findOne(email);
    if(bc) {
      return bc;
    }
    return new HttpException("O e-mail informado não está cadastrado.", HttpStatus.NOT_FOUND);
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
  @Put('pass')
  updatePassword(@Body() body: any) {
    return this.bloodCenterService.updatePass(body.email, body.pass);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloodCenterService.remove(+id);
  }

  @Post("generate-link")
  generateLink (@Body() body: any) {

    return new HttpException("O e-mail informado não está cadastrado.", HttpStatus.NOT_FOUND);

    // const bc = this.findOne(body.email);
    // if(bc) {
    //   return(this.authService.generateLink(body.email, body.hash));
    // } else {
    //   return new HttpException("O e-mail informado não está cadastrado.", HttpStatus.NOT_FOUND);
    // }
  }
}
