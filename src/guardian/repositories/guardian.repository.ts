import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuardianDto } from '../dto/create-guardian.dto';
import { UpdateGuardianDto } from '../dto/update-guardian.dto';
import { GuardianEntity } from '../entities/guardian.entity';

@Injectable()
export class GuardianRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGuardianDto: CreateGuardianDto): Promise<GuardianEntity> {
    return this.prisma.guardian.create({
      data: createGuardianDto,
    })
  }

  async findAll(): Promise<GuardianEntity[]> {
    return this.prisma.guardian.findMany();
  }

  async updatePass(email: string, newPassword: string): Promise<GuardianEntity> {
    return this.prisma.guardian.update({
      where: {
        email: email,
      },
      data: {
        password: newPassword,
      },
    })
  }

  async findAllByLocal(firstNumberCep: string): Promise<GuardianEntity[]> {
    return this.prisma.guardian.findMany({
      where: {
        cep: {
          startsWith: firstNumberCep,
        },
      },
    });
  }

  findOne(id: number): Promise<GuardianEntity> {
    try{
      return this.prisma.guardian.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async findByEmail(email: string): Promise<GuardianEntity> {
    return this.prisma.guardian.findUnique({ where: { email:email } });
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
    return this.prisma.guardian.delete({
      where: {
        id,
      },
    })
  }
}
