/*
  Warnings:

  - You are about to drop the column `sexOfPetId` on the `pet` table. All the data in the column will be lost.
  - You are about to drop the column `statusToDonationId` on the `pet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pet" DROP COLUMN "sexOfPetId",
DROP COLUMN "statusToDonationId";
