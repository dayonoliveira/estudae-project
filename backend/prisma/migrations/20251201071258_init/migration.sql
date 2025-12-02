/*
  Warnings:

  - Changed the type of `familiarity_type` on the `responsible` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypeFamiliarity" AS ENUM ('FATHER', 'MOTHER', 'GRANDFATHER', 'GRANDMOTHER', 'UNCLE', 'AUNT', 'STEPFATHER', 'STEPMOTHER');

-- AlterTable
ALTER TABLE "responsible" DROP COLUMN "familiarity_type",
ADD COLUMN     "familiarity_type" "TypeFamiliarity" NOT NULL;
