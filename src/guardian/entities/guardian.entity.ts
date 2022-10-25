import { Guardian } from "@prisma/client";

export class GuardianEntity implements Guardian {
  id: number;
  cpf: string;
  name: string;
  email: string;
  telephone: string;
  cep: string | null;
  address: string | null;
  number: string | null;
  district: string | null;
  city: string | null;
  state: string | null;
  password: string;
  signUpDate: Date;
}
