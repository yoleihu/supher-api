/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `guadian` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "bloodCenter" ADD COLUMN     "cep" VARCHAR(9),
ALTER COLUMN "address" DROP NOT NULL;

-- AlterTable
ALTER TABLE "guadian" ADD COLUMN     "address" VARCHAR(150),
ALTER COLUMN "cep" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "guadian_address_key" ON "guadian"("address");
