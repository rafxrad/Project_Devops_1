/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Task` table. All the data in the column will be lost.
  - Added the required column `key` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Task` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `key` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`key`);
