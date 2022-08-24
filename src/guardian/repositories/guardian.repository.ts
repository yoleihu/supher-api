import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuardianDto } from '../dto/create-guardian.dto';
import { UpdateGuardianDto } from '../dto/update-guardian.dto';
import { GuardianEntity } from '../entities/guardian.entity';

@Injectable()
export class GuadianRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGuardianDto: CreateGuardianDto): Promise<GuardianEntity> {
    return this.prisma.guardian.create({
      data: createGuardianDto,
    })
  }

  async findAll(): Promise<GuardianEntity[]> {
    return this.prisma.guardian.findMany();
  }

  findOne(id: number): Promise<GuardianEntity> {
    return this.prisma.guardian.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateGuardianDto: UpdateGuardianDto): Promise<GuardianEntity> {
    return this.prisma.guardian.update({
      where: {
        id,
      },
      data: updateGuardianDto,
    })
  }

  async remove(id: number) {
    this.prisma.guardian.delete({
      where: {
        id,
      },
    })
  }
}
