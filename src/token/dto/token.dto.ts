import { IsNotEmpty } from "class-validator";

export class CreateTokenDto {
  @IsNotEmpty()
  hash: string;

  @IsNotEmpty()
  username: string;
}
