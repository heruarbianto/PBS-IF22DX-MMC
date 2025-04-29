-- CreateTable
CREATE TABLE `detail_pemesanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idPemesanan` INTEGER NOT NULL,
    `idKeranjang` INTEGER NOT NULL,
    `note` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `detail_pemesanan_idKeranjang_fkey`(`idKeranjang`),
    INDEX `detail_pemesanan_idPemesanan_fkey`(`idPemesanan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_keranjang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idUser` INTEGER NOT NULL,
    `idMenu` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `status` ENUM('TRUE', 'FALSE') NOT NULL DEFAULT 'FALSE',

    UNIQUE INDEX `tb_keranjang_id_key`(`id`),
    INDEX `tb_keranjang_idMenu_fkey`(`idMenu`),
    INDEX `tb_keranjang_idUser_fkey`(`idUser`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_meja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaMeja` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `tb_meja_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `harga` INTEGER NOT NULL,
    `kategori` ENUM('MAKANAN', 'MINUMAN') NOT NULL DEFAULT 'MAKANAN',
    `gambar_menu` TEXT NOT NULL,
    `ketersediaan` ENUM('READY', 'SOLDOUT') NOT NULL DEFAULT 'READY',

    UNIQUE INDEX `tb_menu_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_pemesanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idUser` INTEGER NOT NULL,
    `idMeja` INTEGER NOT NULL,
    `metode` ENUM('TUNAI', 'ePayment') NOT NULL DEFAULT 'TUNAI',
    `totalProduk` INTEGER NOT NULL,
    `pajak` VARCHAR(10) NOT NULL,
    `total` INTEGER NOT NULL,
    `status` ENUM('MENUNGGUPEMBAYARAN', 'DIPROSES', 'SELESAI', 'DIBATALKAN') NOT NULL DEFAULT 'MENUNGGUPEMBAYARAN',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tb_pemesanan_id_key`(`id`),
    INDEX `tb_pemesanan_idMeja_fkey`(`idMeja`),
    INDEX `tb_pemesanan_idUser_fkey`(`idUser`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaLengkap` VARCHAR(100) NOT NULL,
    `username` CHAR(22) NOT NULL,
    `noHp` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `alamat` TEXT NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `role` ENUM('ADMIN', 'KASIR', 'PELANGGAN') NOT NULL DEFAULT 'PELANGGAN',

    UNIQUE INDEX `tb_user_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detail_pemesanan` ADD CONSTRAINT `detail_pemesanan_idKeranjang_fkey` FOREIGN KEY (`idKeranjang`) REFERENCES `tb_keranjang`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_pemesanan` ADD CONSTRAINT `detail_pemesanan_idPemesanan_fkey` FOREIGN KEY (`idPemesanan`) REFERENCES `tb_pemesanan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_keranjang` ADD CONSTRAINT `tb_keranjang_idMenu_fkey` FOREIGN KEY (`idMenu`) REFERENCES `tb_menu`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_keranjang` ADD CONSTRAINT `tb_keranjang_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `tb_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_pemesanan` ADD CONSTRAINT `tb_pemesanan_idMeja_fkey` FOREIGN KEY (`idMeja`) REFERENCES `tb_meja`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_pemesanan` ADD CONSTRAINT `tb_pemesanan_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `tb_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
