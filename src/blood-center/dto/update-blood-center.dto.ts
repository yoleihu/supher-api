import { PartialType } from '@nestjs/mapped-types';
import { CreateBloodCenterDto } from './create-blood-center.dto';

export class UpdateBloodCenterDto extends PartialType(CreateBloodCenterDto) {}

export class UpdatePassDto {
  email: string;
  pass: string;
}
