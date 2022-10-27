import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AlertService } from './alert.service';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller("alert")
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAlertDto: CreateAlertDto) {
    return this.alertService.create(createAlertDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list/:bloodCenterId')
  findAll(@Param("bloodCenterId") bloodCenterId: number) {
    return this.alertService.findAllByBloodCenterId(bloodCenterId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param("id") id: string) {
    return this.alertService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body()createAlertDto: CreateAlertDto) {
    return this.alertService.update(+id, createAlertDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertService.remove(+id);
  }
}
