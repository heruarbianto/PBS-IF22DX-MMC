/*
  Warnings:

  - Added the required column `idKasir` to the `tb_pemesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_pemesanan` ADD COLUMN `idKasir` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `tb_pemesanan_idKasir_fkey` ON `tb_pemesanan`(`idKasir`);
