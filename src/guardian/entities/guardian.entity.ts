import { Guardian } from "@prisma/client";

export class GuardianEntity implements Guardian {
  number: string;
  district: string;
  city: string;
  state: string;
  id: number;
  cpf: string;
  name: string;
  email: string;
  telephone: string;
  cep: string | null;
  address: string | null;
  password: string;
  signUpDate: Date;
}
