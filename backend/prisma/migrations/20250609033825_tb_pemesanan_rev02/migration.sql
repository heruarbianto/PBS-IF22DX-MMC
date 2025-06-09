-- AddForeignKey
ALTER TABLE `tb_pemesanan` ADD CONSTRAINT `tb_pemesanan_idKasir_fkey` FOREIGN KEY (`idKasir`) REFERENCES `tb_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
