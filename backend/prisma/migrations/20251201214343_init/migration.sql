/*
  Warnings:

  - Added the required column `request_donation_id` to the `match_request_donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `request_mentor_id` to the `match_request_mentor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "match_request_donation" ADD COLUMN     "request_donation_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "match_request_mentor" ADD COLUMN     "request_mentor_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_request_mentor_id_fkey" FOREIGN KEY ("request_mentor_id") REFERENCES "request_mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_request_donation_id_fkey" FOREIGN KEY ("request_donation_id") REFERENCES "request_donation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
