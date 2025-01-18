/*
  Warnings:

  - You are about to drop the column `pasword` on the `Medium_Blog_User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Medium_Blog_User" DROP COLUMN "pasword",
ADD COLUMN     "password" TEXT;
