-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('FEMALE', 'MALE');

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
    "cpf" VARCHAR(11) NOT NULL,
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
    "cnpj" VARCHAR(14) NOT NULL,
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
    "species" VARCHAR(150) NOT NULL,
    "statusToDonation" "Status",
    "sexOfPet" "Sex" NOT NULL,
    "age" VARCHAR(2),
    "bloodType" VARCHAR(150),
    "weight" VARCHAR(5),
    "breed" VARCHAR(150),

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alert" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bloodCenterId" INTEGER NOT NULL,
    "species" VARCHAR(150) NOT NULL,
    "bloodType" VARCHAR(150) NOT NULL,

    CONSTRAINT "alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" VARCHAR(150) NOT NULL,
    "result" VARCHAR(150),
    "petId" INTEGER NOT NULL,
    "bloodCenterId" INTEGER NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "guadian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alert" ADD CONSTRAINT "alert_bloodCenterId_fkey" FOREIGN KEY ("bloodCenterId") REFERENCES "bloodCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_bloodCenterId_fkey" FOREIGN KEY ("bloodCenterId") REFERENCES "bloodCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
