import { Alert } from "@prisma/client";

export class AlertEntity implements Alert {
  id: number
  data: Date
  bloodCenterId: number
  species: string
  bloodType: string
}
