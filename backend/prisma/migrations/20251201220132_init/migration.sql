-- CreateEnum
CREATE TYPE "ProfileType" AS ENUM ('STUDENT', 'MENTOR', 'VOLUNTEER');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profile_type" "ProfileType";
