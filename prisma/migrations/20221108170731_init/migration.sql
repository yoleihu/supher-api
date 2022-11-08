/*
  Warnings:

  - The `statusToDonation` column on the `pet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `species` on the `alert` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `species` on the `pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "alert" DROP COLUMN "species",
ADD COLUMN     "species" "Species" NOT NULL;

-- AlterTable
ALTER TABLE "pet" DROP COLUMN "species",
ADD COLUMN     "species" "Species" NOT NULL,
DROP COLUMN "statusToDonation",
ADD COLUMN     "statusToDonation" "Status";
