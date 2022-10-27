import { Appointment } from "@prisma/client";

export class AppointmentEntity implements Appointment{
  id: number
  data: Date
  type: string
  result: string | null
  petId: number
  bloodCenterId: number
}
