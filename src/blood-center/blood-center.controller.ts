import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloodCenterService } from './blood-center.service';
import { CreateBloodCenterDto } from './dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from './dto/update-blood-center.dto';

@Controller('blood-center')
export class BloodCenterController {
  constructor(private readonly bloodCenterService: BloodCenterService) {}

  @Post()
  create(@Body() createBloodCenterDto: CreateBloodCenterDto) {
    return this.bloodCenterService.create(createBloodCenterDto);
  }

  @Get()
  findAll() {
    return this.bloodCenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloodCenterService.findOne(+id);
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
