import { Guardian } from "@prisma/client";

export class GuardianEntity implements Guardian {
  id: number;
  cpf: string;
  name: string;
  email: string;
  telephone: string;
  cep: string;
  password: string;
}
