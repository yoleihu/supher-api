import { Alert, Species } from "@prisma/client";

export class AlertEntity implements Alert {
  id: number
  data: Date
  bloodCenterId: number
  species: Species
  bloodType: string
}
