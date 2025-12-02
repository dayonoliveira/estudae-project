/*
  Warnings:

  - You are about to drop the column `bio` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `device_ip` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `is_minor` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `is_new` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `profile_photo` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "bio",
DROP COLUMN "device_ip",
DROP COLUMN "is_minor",
DROP COLUMN "is_new",
DROP COLUMN "profile_photo",
ADD COLUMN     "instituteName" TEXT;
