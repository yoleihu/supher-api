import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAppointmentDto } from "../dto/create-appointment.dto";
import { AppointmentEntity } from "../entities/appointment.entity";

@Injectable()
export class AppointmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<AppointmentEntity> {
    return this.prisma.appointment.create({
      data: createAppointmentDto,
    })
  }

  async findAllByBloodCenter(bloodCenterId: number): Promise<AppointmentEntity[]> {
    return this.prisma.appointment.findMany({
      where: {
        bloodCenterId
      },
  });
  }

  findOne(id: number): Promise<AppointmentEntity> {
    return this.prisma.appointment.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, createAppointmentDto: CreateAppointmentDto): Promise<AppointmentEntity> {
    return this.prisma.appointment.update({
      where: {
        id,
      },
      data: createAppointmentDto,
    })
  }

  async remove(id: number) {
    this.prisma.appointment.delete({
      where: {
        id,
      },
    })
  }
}
