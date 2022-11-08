import { Appointment } from "@prisma/client";

export class AppointmentEntity implements Appointment{
  pet: string;
  id: number
  data: Date
  type: string
  result: string | null
  bloodCenterId: number
}
