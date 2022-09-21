-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_bloodTypeId_fkey";

-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_breedId_fkey";

-- AlterTable
ALTER TABLE "pet" ALTER COLUMN "statusToDonation" DROP NOT NULL,
ALTER COLUMN "statusToDonationId" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "bloodTypeId" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "breedId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_bloodTypeId_fkey" FOREIGN KEY ("bloodTypeId") REFERENCES "BloodType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE SET NULL ON UPDATE CASCADE;
