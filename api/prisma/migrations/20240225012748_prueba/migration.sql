/*
  Warnings:

  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DATA TYPE VARCHAR(32),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(32);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
