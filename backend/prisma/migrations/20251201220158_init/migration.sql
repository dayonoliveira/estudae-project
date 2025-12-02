/*
  Warnings:

  - Made the column `profile_type` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "profile_type" SET NOT NULL;
