import { BloodCenter } from "@prisma/client";

export class BloodCenterEntity implements BloodCenter {
  number: string;
  district: string;
  city: string;
  state: string;
  id: number;
  cnpj: string;
  name: string;
  email: string;
  telephone: string;
  cep: string | null;
  address: string | null;
  password: string;
  signUpDate: Date;
}
