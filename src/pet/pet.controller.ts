import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreatePetDto } from "./dto/create-pet.dto";
import { PetService } from "./pet.service";

@Controller("pet")
export class PetController {
  constructor(private readonly petService: PetService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list/:guardianId')
  findAll(@Param("guardianId") guardianId: number) {
    return this.petService.findAllByGuardianId(guardianId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param("id") id: number) {
    return this.petService.findOne(id);
  }

  @Get("find-by-name")
  findOneByNameAndGuardian(@Body() name: string, guardianId: number) {
    return this.petService.findOneByNameAndGuardian(name, guardianId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() CreatePetDto: CreatePetDto
  ) {
    return this.petService.update(+id, CreatePetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.petService.remove(+id);
  }
}
