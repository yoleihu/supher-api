import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreatePetDto } from "./dto/create-pet.dto";
import { PetService } from "./pet.service";

@Controller("pet")
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  findAll(@Body() guardianId: number) {
    return this.petService.findAllByGuardianId(guardianId);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.petService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() CreatePetDto: CreatePetDto
  ) {
    return this.petService.update(+id, CreatePetDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.petService.remove(+id);
  }
}
