import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateAppointmentDto {
  @IsNotEmpty()
  data: Date

  @IsNotEmpty()
  type: string

  @IsOptional()
  result: string | null

  @IsNotEmpty()
  pet: string

  @IsNotEmpty()
  bloodCenterId: number
}
