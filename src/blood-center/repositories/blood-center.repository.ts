import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBloodCenterDto } from '../dto/create-blood-center.dto';
import { UpdateBloodCenterDto } from '../dto/update-blood-center.dto';
import { BloodCenterEntity } from '../entities/blood-center.entity';

@Injectable()
export class BloodCenterRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBloodCenterDto: CreateBloodCenterDto): Promise<BloodCenterEntity> {
    return this.prisma.bloodCenter.create({
      data: createBloodCenterDto,
    })
  }

  async findAll(): Promise<BloodCenterEntity[]> {
    return this.prisma.bloodCenter.findMany();
  }

  findOne(id: number): Promise<BloodCenterEntity> {
    try{
      return this.prisma.bloodCenter.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async findAllByLocal(firstNumberCep: string): Promise<BloodCenterEntity[]> {
    return this.prisma.bloodCenter.findMany({
      where: {
        cep: {
          startsWith: firstNumberCep,
        },
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.bloodCenter.findUnique({
      where: {
        email: email,
      }
    });
  }

  async update(id: number, updateBloodCenterDto: UpdateBloodCenterDto): Promise<BloodCenterEntity> {
    return this.prisma.bloodCenter.update({
      where: {
        id,
      },
      data: updateBloodCenterDto,
    })
  }

  async updatePass(email: string, newPassword: string): Promise<BloodCenterEntity> {
    return this.prisma.bloodCenter.update({
      where: {
        email: email,
      },
      data: {
        password: newPassword,
      },
    })
  }

  async remove(id: number) {
    return this.prisma.bloodCenter.delete({
      where: {
        id,
      },
    })
  }
}
