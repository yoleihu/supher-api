import { BloodCenter } from "@prisma/client";

export class BloodCenterEntity implements BloodCenter {

  id: number;
  cnpj: string;
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
