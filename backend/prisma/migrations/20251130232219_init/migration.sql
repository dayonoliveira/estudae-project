/*
  Warnings:

  - You are about to drop the `matches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `material_requests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentorship_requests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_helper_id_fkey";

-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_student_id_fkey";

-- DropForeignKey
ALTER TABLE "material_requests" DROP CONSTRAINT "material_requests_student_id_fkey";

-- DropForeignKey
ALTER TABLE "mentorship_requests" DROP CONSTRAINT "mentorship_requests_student_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_guardian_id_fkey";

-- DropTable
DROP TABLE "matches";

-- DropTable
DROP TABLE "material_requests";

-- DropTable
DROP TABLE "mentorship_requests";

-- DropTable
DROP TABLE "notifications";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "MatchStatus";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "ProfileType";

-- DropEnum
DROP TYPE "RequestStatus";

-- DropEnum
DROP TYPE "RequestType";

-- DropEnum
DROP TYPE "UrgencyLevel";

-- CreateTable
CREATE TABLE "user" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "birthdate" DATE,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT,
    "bio" TEXT,
    "profile_photo" BYTEA,
    "status" TEXT,
    "is_new" BOOLEAN,
    "is_minor" BOOLEAN,
    "responsible_id" BIGINT,
    "device_ip" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responsible" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "familiarity_type" TEXT,

    CONSTRAINT "responsible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "id" BIGSERIAL NOT NULL,
    "role_name" TEXT,
    "user_id" BIGINT,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" BIGSERIAL NOT NULL,
    "education_level" TEXT,
    "grade" INTEGER,
    "most_dificult_subject" TEXT,
    "most_interested_subject" TEXT,
    "user_id" BIGINT,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentor" (
    "id" BIGSERIAL NOT NULL,
    "first_subject" TEXT,
    "second_subject" TEXT,
    "third_subject" TEXT,
    "total_score" INTEGER,
    "career" TEXT,
    "user_id" BIGINT,

    CONSTRAINT "mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer" (
    "id" BIGSERIAL NOT NULL,
    "first_donaing_thing" TEXT,
    "second_donaing_thing" TEXT,
    "third_donaing_thing" TEXT,
    "it_helps_with_recurrence" BOOLEAN,
    "total_score" INTEGER,
    "user_id" BIGINT,

    CONSTRAINT "volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request_mentor" (
    "id" BIGSERIAL NOT NULL,
    "subject_name" TEXT,
    "difficulties_description" TEXT,
    "suggested_date_and_time" TIMESTAMP(3),
    "meet_link" TEXT,
    "student_user_id" BIGINT,

    CONSTRAINT "request_mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request_donation" (
    "id" BIGSERIAL NOT NULL,
    "material_type" TEXT,
    "material_name" TEXT,
    "motivation_description" TEXT,
    "suggested_date_and_time" TIMESTAMP(3),
    "pickup_address_street" TEXT,
    "pickup_address_number" TEXT,
    "pickup_address_neighborhood" TEXT,
    "pickup_address_complement" TEXT,
    "pickup_address_cep" TEXT,
    "student_user_id" BIGINT,

    CONSTRAINT "request_donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" BIGSERIAL NOT NULL,
    "score" INTEGER,
    "description" TEXT,
    "recomended" BOOLEAN,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_request_mentor" (
    "id" BIGSERIAL NOT NULL,
    "status" TEXT,
    "student_feedback_id" BIGINT,
    "mentor_feedback_id" BIGINT,
    "student_user_id" BIGINT,
    "mentor_user_id" BIGINT,

    CONSTRAINT "match_request_mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_request_donation" (
    "id" BIGSERIAL NOT NULL,
    "status" TEXT,
    "student_feedback_id" BIGINT,
    "volunteer_feedback_id" BIGINT,
    "student_user_id" BIGINT,
    "volunteer_user_id" BIGINT,

    CONSTRAINT "match_request_donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_match_request_mentor" (
    "id" BIGSERIAL NOT NULL,
    "comment_description" TEXT,
    "match_request_mentor_id" BIGINT,
    "user_id" BIGINT,

    CONSTRAINT "comment_match_request_mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_match_request_donation" (
    "id" BIGSERIAL NOT NULL,
    "comment_description" TEXT,
    "match_request_donation_id" BIGINT,
    "user_id" BIGINT,

    CONSTRAINT "comment_match_request_donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report" (
    "id" BIGSERIAL NOT NULL,
    "report_type" TEXT,
    "description" TEXT,
    "is_recurrent" BOOLEAN,
    "recurrency_number" INTEGER,
    "was_solved" BOOLEAN,
    "match_id" BIGINT,
    "user_id" BIGINT,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_user_id_key" ON "student"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "mentor_user_id_key" ON "mentor"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "volunteer_user_id_key" ON "volunteer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_request_mentor_student_feedback_id_key" ON "match_request_mentor"("student_feedback_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_request_mentor_mentor_feedback_id_key" ON "match_request_mentor"("mentor_feedback_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_request_donation_student_feedback_id_key" ON "match_request_donation"("student_feedback_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_request_donation_volunteer_feedback_id_key" ON "match_request_donation"("volunteer_feedback_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_responsible_id_fkey" FOREIGN KEY ("responsible_id") REFERENCES "responsible"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor" ADD CONSTRAINT "mentor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_mentor" ADD CONSTRAINT "request_mentor_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_donation" ADD CONSTRAINT "request_donation_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_mentor_user_id_fkey" FOREIGN KEY ("mentor_user_id") REFERENCES "mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_student_feedback_id_fkey" FOREIGN KEY ("student_feedback_id") REFERENCES "feedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_mentor" ADD CONSTRAINT "match_request_mentor_mentor_feedback_id_fkey" FOREIGN KEY ("mentor_feedback_id") REFERENCES "feedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_student_user_id_fkey" FOREIGN KEY ("student_user_id") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_volunteer_user_id_fkey" FOREIGN KEY ("volunteer_user_id") REFERENCES "volunteer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_student_feedback_id_fkey" FOREIGN KEY ("student_feedback_id") REFERENCES "feedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_request_donation" ADD CONSTRAINT "match_request_donation_volunteer_feedback_id_fkey" FOREIGN KEY ("volunteer_feedback_id") REFERENCES "feedback"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_mentor" ADD CONSTRAINT "comment_match_request_mentor_match_request_mentor_id_fkey" FOREIGN KEY ("match_request_mentor_id") REFERENCES "match_request_mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_mentor" ADD CONSTRAINT "comment_match_request_mentor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_donation" ADD CONSTRAINT "comment_match_request_donation_match_request_donation_id_fkey" FOREIGN KEY ("match_request_donation_id") REFERENCES "match_request_donation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment_match_request_donation" ADD CONSTRAINT "comment_match_request_donation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report" ADD CONSTRAINT "report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
