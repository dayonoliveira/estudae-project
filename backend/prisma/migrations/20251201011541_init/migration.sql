/*
  Warnings:

  - You are about to drop the column `recomended` on the `feedback` table. All the data in the column will be lost.
  - Made the column `comment_description` on table `comment_match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `match_request_donation_id` on table `comment_match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `comment_match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comment_description` on table `comment_match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `match_request_mentor_id` on table `comment_match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `comment_match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `recommended` to the `feedback` table without a default value. This is not possible if the table is not empty.
  - Made the column `score` on table `feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `feedback` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_feedback_id` on table `match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `volunteer_feedback_id` on table `match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_user_id` on table `match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `volunteer_user_id` on table `match_request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_feedback_id` on table `match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mentor_feedback_id` on table `match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_user_id` on table `match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mentor_user_id` on table `match_request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_subject` on table `mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `second_subject` on table `mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `third_subject` on table `mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_score` on table `mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `career` on table `mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `report_type` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_recurrent` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recurrency_number` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `was_solved` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `match_id` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `material_type` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `material_name` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motivation_description` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `suggested_date_and_time` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pickup_address_street` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pickup_address_number` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pickup_address_neighborhood` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pickup_address_complement` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pickup_address_cep` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_user_id` on table `request_donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subject_name` on table `request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `difficulties_description` on table `request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `suggested_date_and_time` on table `request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `meet_link` on table `request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_user_id` on table `request_mentor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `responsible` required. This step will fail if there are existing NULL values in that column.
  - Made the column `familiarity_type` on table `responsible` required. This step will fail if there are existing NULL values in that column.
  - Made the column `education_level` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `grade` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `most_dificult_subject` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `most_interested_subject` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthdate` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_new` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_minor` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `device_ip` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role_name` on table `user_role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `user_role` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_donaing_thing` on table `volunteer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `second_donaing_thing` on table `volunteer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `third_donaing_thing` on table `volunteer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `it_helps_with_recurrence` on table `volunteer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_score` on table `volunteer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `volunteer` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "comment_match_request_donation" DROP CONSTRAINT "comment_match_request_donation_match_request_donation_id_fkey";

-- DropForeignKey
ALTER TABLE "comment_match_request_donation" DROP CONSTRAINT "comment_match_request_donation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "comment_match_request_mentor" DROP CONSTRAINT "comment_match_request_mentor_match_request_mentor_id_fkey";

-- DropForeignKey
ALTER TABLE "comment_match_request_mentor" DROP CONSTRAINT "comment_match_request_mentor_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_donation" DROP CONSTRAINT "match_request_donation_student_feedback_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_donation" DROP CONSTRAINT "match_request_donation_student_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_donation" DROP CONSTRAINT "match_request_donation_volunteer_feedback_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_donation" DROP CONSTRAINT "match_request_donation_volunteer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_mentor" DROP CONSTRAINT "match_request_mentor_mentor_feedback_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_mentor" DROP CONSTRAINT "match_request_mentor_mentor_user_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_mentor" DROP CONSTRAINT "match_request_mentor_student_feedback_id_fkey";

-- DropForeignKey
ALTER TABLE "match_request_mentor" DROP CONSTRAINT "match_request_mentor_student_user_id_fkey";

-- DropForeignKey
ALTER TABLE "mentor" DROP CONSTRAINT "mentor_user_id_fkey";

-- DropForeignKey
ALTER TABLE "report" DROP CONSTRAINT "report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "request_donation" DROP CONSTRAINT "request_donation_student_user_id_fkey";

-- DropForeignKey
ALTER TABLE "request_mentor" DROP CONSTRAINT "request_mentor_student_user_id_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_user_id_fkey";

-- DropForeignKey
ALTER TABLE "volunteer" DROP CONSTRAINT "volunteer_user_id_fkey";

-- AlterTable
ALTER TABLE "comment_match_request_donation" ALTER COLUMN "comment_description" SET NOT NULL,
ALTER COLUMN "match_request_donation_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "comment_match_request_mentor" ALTER COLUMN "comment_description" SET NOT NULL,
ALTER COLUMN "match_request_mentor_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "recomended",
ADD COLUMN     "recommended" BOOLEAN NOT NULL,
ALTER COLUMN "score" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "match_request_donation" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "student_feedback_id" SET NOT NULL,
ALTER COLUMN "volunteer_feedback_id" SET NOT NULL,
ALTER COLUMN "student_user_id" SET NOT NULL,
ALTER COLUMN "volunteer_user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "match_request_mentor" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "student_feedback_id" SET NOT NULL,
ALTER COLUMN "mentor_feedback_id" SET NOT NULL,
ALTER COLUMN "student_user_id" SET NOT NULL,
ALTER COLUMN "mentor_user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "mentor" ALTER COLUMN "first_subject" SET NOT NULL,
ALTER COLUMN "second_subject" SET NOT NULL,
ALTER COLUMN "third_subject" SET NOT NULL,
ALTER COLUMN "total_score" SET NOT NULL,
ALTER COLUMN "career" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "report" ALTER COLUMN "report_type" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "is_recurrent" SET NOT NULL,
ALTER COLUMN "recurrency_number" SET NOT NULL,
ALTER COLUMN "was_solved" SET NOT NULL,
ALTER COLUMN "match_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "request_donation" ALTER COLUMN "material_type" SET NOT NULL,
ALTER COLUMN "material_name" SET NOT NULL,
ALTER COLUMN "motivation_description" SET NOT NULL,
ALTER COLUMN "suggested_date_and_time" SET NOT NULL,
ALTER COLUMN "pickup_address_street" SET NOT NULL,
ALTER COLUMN "pickup_address_number" SET NOT NULL,
ALTER COLUMN "pickup_address_neighborhood" SET NOT NULL,
ALTER COLUMN "pickup_address_complement" SET NOT NULL,
ALTER COLUMN "pickup_address_cep" SET NOT NULL,
ALTER COLUMN "student_user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "request_mentor" ALTER COLUMN "subject_name" SET NOT NULL,
ALTER COLUMN "difficulties_description" SET NOT NULL,
ALTER COLUMN "suggested_date_and_time" SET NOT NULL,
ALTER COLUMN "meet_link" SET NOT NULL,
ALTER COLUMN "student_user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "responsible" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "familiarity_type" SET NOT NULL;

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "education_level" SET NOT NULL,
ALTER COLUMN "grade" SET NOT NULL,
ALTER COLUMN "most_dificult_subject" SET NOT NULL,
ALTER COLUMN "most_interested_subject" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "birthdate" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "is_new" SET NOT NULL,
ALTER COLUMN "is_minor" SET NOT NULL,
ALTER COLUMN "device_ip" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_role" ALTER COLUMN "role_name" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "volunteer" ALTER COLUMN "first_donaing_thing" SET NOT NULL,
ALTER COLUMN "second_donaing_thing" SET NOT NULL,
ALTER COLUMN "third_donaing_thing" SET NOT NULL,
ALTER COLUMN "it_helps_with_recurrence" SET NOT NULL,
ALTER COLUMN "total_score" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor" ADD CONSTRAINT "mentor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_mentor" ADD CONSTRAINT "request_mentor_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_donation" ADD CONSTRAINT "request_donation_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_mentor_user_id_fkey" FOREIGN KEY ("mentor_user_id") REFERENCES "mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_student_feedback_id_fkey" FOREIGN KEY ("student_feedback_id") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_mentor_feedback_id_fkey" FOREIGN KEY ("mentor_feedback_id") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_volunteer_user_id_fkey" FOREIGN KEY ("volunteer_user_id") REFERENCES "volunteer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_student_feedback_id_fkey" FOREIGN KEY ("student_feedback_id") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_volunteer_feedback_id_fkey" FOREIGN KEY ("volunteer_feedback_id") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_mentor" ADD CONSTRAINT "comment_match_request_mentor_match_request_mentor_id_fkey" FOREIGN KEY ("match_request_mentor_id") REFERENCES "match_request_mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_mentor" ADD CONSTRAINT "comment_match_request_mentor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_donation" ADD CONSTRAINT "comment_match_request_donation_match_request_donation_id_fkey" FOREIGN KEY ("match_request_donation_id") REFERENCES "match_request_donation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_donation" ADD CONSTRAINT "comment_match_request_donation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
