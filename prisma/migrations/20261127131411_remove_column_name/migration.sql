/*
  Warnings:

  - You are about to drop the column `contact` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "contact",
DROP COLUMN "username";
