/*
  Warnings:

  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `sid` on the `Session` table. All the data in the column will be lost.
  - The `id` column on the `Session` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sessionKey]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expirationDate` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionKey` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Session_sid_key";

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "data",
DROP COLUMN "expiresAt",
DROP COLUMN "sid",
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sessionKey" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionKey_key" ON "Session"("sessionKey");
