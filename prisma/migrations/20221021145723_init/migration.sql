-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('FAMALE', 'MALE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FIT', 'UNFIT');

-- CreateTable
CREATE TABLE "token" (
    "hash" VARCHAR(256) NOT NULL,
    "username" VARCHAR(150) NOT NULL
);

-- CreateTable
CREATE TABLE "guadian" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "number" VARCHAR(10),
    "address" VARCHAR(150),
    "district" VARCHAR(150),
    "city" VARCHAR(150),
    "state" VARCHAR(150),
    "email" VARCHAR(150) NOT NULL,
    "telephone" VARCHAR(45) NOT NULL,
    "cep" VARCHAR(9),
    "password" VARCHAR(255) NOT NULL,
    "signUpDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guadian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bloodCenter" (
    "id" SERIAL NOT NULL,
    "cnpj" VARCHAR(255) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "number" VARCHAR(10),
    "address" VARCHAR(150),
    "district" VARCHAR(150),
    "city" VARCHAR(150),
    "state" VARCHAR(150),
    "email" VARCHAR(150) NOT NULL,
    "telephone" VARCHAR(45) NOT NULL,
    "cep" VARCHAR(9),
    "password" VARCHAR(255) NOT NULL,
    "signUpDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bloodCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "guardianId" INTEGER NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "speciesId" INTEGER NOT NULL,
    "statusToDonation" "Status",
    "sexOfPet" "Sex" NOT NULL,
    "age" VARCHAR(2),
    "bloodTypeId" INTEGER,
    "weight" VARCHAR(5),
    "breedId" INTEGER,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bloodCenterId" INTEGER NOT NULL,
    "speciesId" INTEGER NOT NULL,
    "bloodTypeId" INTEGER,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "speciesId" INTEGER NOT NULL,

    CONSTRAINT "BloodType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Breed" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "speciesId" INTEGER NOT NULL,

    CONSTRAINT "Breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "typeId" INTEGER NOT NULL,
    "resultId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    "bloodCenterId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResultAppointment" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "ResultAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "AppointmentType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "token_hash_key" ON "token"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "token_username_key" ON "token"("username");

-- CreateIndex
CREATE UNIQUE INDEX "guadian_cpf_key" ON "guadian"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "guadian_email_key" ON "guadian"("email");

-- CreateIndex
CREATE UNIQUE INDEX "bloodCenter_cnpj_key" ON "bloodCenter"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "bloodCenter_email_key" ON "bloodCenter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_resultId_key" ON "Appointment"("resultId");

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "guadian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_bloodTypeId_fkey" FOREIGN KEY ("bloodTypeId") REFERENCES "BloodType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_bloodCenterId_fkey" FOREIGN KEY ("bloodCenterId") REFERENCES "bloodCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_bloodTypeId_fkey" FOREIGN KEY ("bloodTypeId") REFERENCES "BloodType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodType" ADD CONSTRAINT "BloodType_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "AppointmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "ResultAppointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_bloodCenterId_fkey" FOREIGN KEY ("bloodCenterId") REFERENCES "bloodCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
