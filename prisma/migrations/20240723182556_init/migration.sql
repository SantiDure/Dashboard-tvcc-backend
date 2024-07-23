/*
  Warnings:

  - The values [unidades,metros] on the enum `Uso_unidad` will be removed. If these variants are still used in the database, this will fail.
  - The values [unidades,metros] on the enum `Uso_unidad` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `unidad` ENUM('u', 'm') NOT NULL;

-- AlterTable
ALTER TABLE `uso` MODIFY `unidad` ENUM('u', 'm') NOT NULL;
