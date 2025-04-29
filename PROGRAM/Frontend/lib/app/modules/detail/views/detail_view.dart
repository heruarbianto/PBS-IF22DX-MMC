import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../controllers/detail_controller.dart';

class DetailView extends GetView<DetailController> {
  const DetailView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final NumberFormat currencyFormat = NumberFormat('#,###', 'id_ID');

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: const FaIcon(FontAwesomeIcons.arrowLeft, color: Colors.black),
          onPressed: () => Get.back(),
        ),
        title: Text(
          'Detail Produk',
          style: GoogleFonts.poppins(
            fontWeight: FontWeight.w600,
            fontSize: 18,
            color: Colors.black,
          ),
        ),
        actions: [
          IconButton(
            icon: const FaIcon(FontAwesomeIcons.heart, color: Colors.black),
            onPressed: () {
              Get.snackbar('Favorit', 'Ditambahkan ke favorit!');
            },
          ),
          IconButton(
            icon: const FaIcon(FontAwesomeIcons.share, color: Colors.black),
            onPressed: () {
              Get.snackbar('Bagikan', 'Fitur bagikan belum tersedia.');
            },
          ),
        ],
      ),
      body: Obx(() {
        if (controller.isLoading.value) {
          return const Center(child: CircularProgressIndicator(color: Colors.blue));
        }
        if (controller.menuItem.isEmpty) {
          return const Center(child: Text('Gagal memuat data', style: TextStyle(color: Colors.grey)));
        }

        final item = controller.menuItem;
        return Stack(
          children: [
            SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Gambar produk
                  Container(
                    height: 350,
                    width: double.infinity,
                    child: item['image'] != null && item['image'].toString().isNotEmpty
                        ? Image.network(
                            item['image'],
                            fit: BoxFit.cover,
                            width: double.infinity,
                            height: 350,
                            errorBuilder: (context, error, stackTrace) {
                              return Container(
                                decoration: BoxDecoration(
                                  color: Colors.grey[200],
                                ),
                                child: const Center(
                                  child: FaIcon(
                                    FontAwesomeIcons.utensils,
                                    size: 150,
                                    color: Colors.blueAccent,
                                  ),
                                ),
                              );
                            },
                          )
                        : Container(
                            decoration: BoxDecoration(
                              color: Colors.grey[200],
                            ),
                            child: const Center(
                              child: FaIcon(
                                FontAwesomeIcons.utensils,
                                size: 150,
                                color: Colors.blueAccent,
                              ),
                            ),
                          ),
                  ),
                  const SizedBox(height: 16),
                  // Informasi utama
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Nama produk
                        Text(
                          item['name'],
                          style: GoogleFonts.poppins(
                            fontSize: 20,
                            fontWeight: FontWeight.w600,
                            color: Colors.black87,
                          ),
                        ),
                        const SizedBox(height: 8),
                        // Harga
                        Text(
                          'Rp ${currencyFormat.format(item['price'].toInt())}',
                          style: GoogleFonts.poppins(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Colors.blueAccent,
                          ),
                        ),
                        const SizedBox(height: 12),
                        // Ketersediaan
                        Text(
                          item['availability'],
                          style: GoogleFonts.poppins(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: item['availability'] == 'SOLDOUT' ? Colors.red : Colors.blueAccent,
                          ),
                        ),
                        const SizedBox(height: 12),
                        // Rating dan terjual
                        Row(
                          children: [
                            const FaIcon(FontAwesomeIcons.solidStar, color: Colors.yellow, size: 20),
                            const SizedBox(width: 4),
                            Text(
                              '${item['rating']} (${item['sold']} terjual)',
                              style: GoogleFonts.poppins(
                                fontSize: 14,
                                color: Colors.grey[600],
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        // Kategori
                        Row(
                          children: [
                            const FaIcon(FontAwesomeIcons.tag, color: Colors.blueAccent, size: 20),
                            const SizedBox(width: 4),
                            Text(
                              item['category'],
                              style: GoogleFonts.poppins(
                                fontSize: 14,
                                color: Colors.grey[600],
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                      ],
                    ),
                  ),
                  // Divider
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 16.0),
                    child: Divider(
                      color: Colors.grey[300],
                      thickness: 8,
                    ),
                  ),
                  // Deskripsi produk
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Deskripsi Produk',
                          style: GoogleFonts.poppins(
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                            color: Colors.black87,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          item['description'],
                          style: GoogleFonts.poppins(
                            fontSize: 14,
                            color: Colors.grey[800],
                            height: 1.5,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 80), // Space untuk bottom navigation
                ],
              ),
            ),
          ],
        );
      }),
      bottomNavigationBar: Obx(() {
        if (controller.isLoading.value) {
          return const SizedBox.shrink();
        }
        return Container(
          padding: const EdgeInsets.all(16.0),
          decoration: BoxDecoration(
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.2),
                spreadRadius: 2,
                blurRadius: 5,
                offset: const Offset(0, -2),
              ),
            ],
          ),
          child: Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: controller.menuItem['availability'] == 'SOLDOUT'
                      ? null
                      : () {
                          Get.snackbar('Beli Langsung', 'Fitur beli langsung belum tersedia.');
                        },
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    side: BorderSide(
                      color: controller.menuItem['availability'] == 'SOLDOUT'
                          ? Colors.grey
                          : Colors.blueAccent,
                      width: 2,
                    ),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: Text(
                    'Beli Langsung',
                    style: GoogleFonts.poppins(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: controller.menuItem['availability'] == 'SOLDOUT'
                          ? Colors.grey
                          : Colors.blueAccent,
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: ElevatedButton(
                  onPressed: controller.menuItem['availability'] == 'SOLDOUT'
                      ? null
                      : () {
                          Get.snackbar('Keranjang', 'Ditambahkan ke keranjang!');
                        },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.blueAccent,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: Text(
                    'Keranjang',
                    style: GoogleFonts.poppins(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      }),
    );
  }
}