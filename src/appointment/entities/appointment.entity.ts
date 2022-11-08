import { Appointment } from "@prisma/client";

export class AppointmentEntity implements Appointment{
  petId: number;
  id: number
  data: Date
  type: string
  result: string | null
  bloodCenterId: number
}
