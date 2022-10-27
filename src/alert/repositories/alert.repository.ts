import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAlertDto } from "../dto/create-alert.dto";
import { AlertEntity } from "../entities/alert.entity";

@Injectable()
export class AlertRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAlertDto: CreateAlertDto): Promise<AlertEntity> {
    return this.prisma.alert.create({
      data: createAlertDto,
    })
  }

  async findAllByBloodCenterId(bloodCenterId: number): Promise<AlertEntity[]> {
    return this.prisma.alert.findMany({
      where: {
        bloodCenterId,
      },
    });
  }

  findOne(id: number): Promise<AlertEntity> {
    return this.prisma.alert.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, createAlertDto: CreateAlertDto): Promise<AlertEntity> {
    return this.prisma.alert.update({
      where: {
        id,
      },
      data: createAlertDto,
    })
  }

  async remove(id: number) {
    this.prisma.alert.delete({
      where: {
        id,
      },
    })
  }
}
