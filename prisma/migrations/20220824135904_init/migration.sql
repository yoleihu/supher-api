-- CreateTable
CREATE TABLE "Guardian" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "telephone" VARCHAR(45) NOT NULL,
    "cep" VARCHAR(9) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Guardian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodCenter" (
    "id" SERIAL NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "address" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "telephone" VARCHAR(45) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "BloodCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "guardianId" INTEGER NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "speciesId" INTEGER NOT NULL,
    "statusToDonationId" INTEGER NOT NULL,
    "sexOfPetId" INTEGER NOT NULL,
    "age" VARCHAR(2) NOT NULL,
    "bloodTypeId" INTEGER NOT NULL,
    "weight" VARCHAR(5) NOT NULL,
    "breedId" INTEGER NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusToDonation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "StatusToDonation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SexOfPet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "SexOfPet_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Guardian_cpf_key" ON "Guardian"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Guardian_email_key" ON "Guardian"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BloodCenter_cnpj_key" ON "BloodCenter"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "BloodCenter_address_key" ON "BloodCenter"("address");

-- CreateIndex
CREATE UNIQUE INDEX "BloodCenter_email_key" ON "BloodCenter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_resultId_key" ON "Appointment"("resultId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "Guardian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_statusToDonationId_fkey" FOREIGN KEY ("statusToDonationId") REFERENCES "StatusToDonation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_sexOfPetId_fkey" FOREIGN KEY ("sexOfPetId") REFERENCES "SexOfPet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_bloodTypeId_fkey" FOREIGN KEY ("bloodTypeId") REFERENCES "BloodType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodType" ADD CONSTRAINT "BloodType_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "AppointmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "ResultAppointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_bloodCenterId_fkey" FOREIGN KEY ("bloodCenterId") REFERENCES "BloodCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
