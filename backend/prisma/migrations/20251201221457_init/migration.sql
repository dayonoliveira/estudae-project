/*
  Warnings:

  - You are about to drop the column `instituteName` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "instituteName",
ADD COLUMN     "institute_name" TEXT;
