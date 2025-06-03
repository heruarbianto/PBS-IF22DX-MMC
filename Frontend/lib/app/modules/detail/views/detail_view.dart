import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:intl/intl.dart';
import '../controllers/detail_controller.dart'; // pastikan ini sudah sesuai dengan path kamu

class DetailView extends GetView<DetailController> {
  const DetailView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final currencyFormat = NumberFormat("#,##0", "id_ID");

    return Scaffold(
      appBar: AppBar(
        title: const Text('Detail Produk'),
        centerTitle: true,
        backgroundColor: Colors.blueAccent,
        foregroundColor: Colors.white,
      ),
      body: Stack(
  children: [
    Obx(() {
      if (controller.isLoading.value) {
        return const Center(child: CircularProgressIndicator(color: Colors.blue));
      }
      if (controller.menuItem.isEmpty) {
        return const Center(child: Text('Gagal memuat data'));
      }

      final item = controller.menuItem;
      final screenWidth = MediaQuery.of(context).size.width;

      return screenWidth > 800
          ? Padding(
              padding: const EdgeInsets.only(bottom: 80.0),
              child: buildDesktopLayout(item, NumberFormat("#,##0", "id_ID")),
            )
          : Padding(
              padding: const EdgeInsets.only(bottom: 80.0),
              child: SingleChildScrollView(
                child: buildMobileLayout(item, NumberFormat("#,##0", "id_ID")),
              ),
            );
    }),
    Align(
      alignment: Alignment.bottomCenter,
      child: buildActionButton(),
    ),
  ],
)

    );
  }

  Widget buildMobileLayout(Map<String, dynamic> item, NumberFormat currencyFormat) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildProductImage(item),
        buildProductInfo(item, currencyFormat),
        const SizedBox(height: 16),
        buildDivider(),
        buildDescription(item),
        const SizedBox(height: 80),
      ],
    );
  }

  Widget buildDesktopLayout(Map<String, dynamic> item, NumberFormat currencyFormat) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            flex: 2,
            child: buildProductImage(item),
          ),
          const SizedBox(width: 24),
          Expanded(
            flex: 3,
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  buildProductInfo(item, currencyFormat),
                  const SizedBox(height: 16),
                  buildDivider(),
                  buildDescription(item),
                  const SizedBox(height: 100),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget buildProductImage(Map<String, dynamic> item) {
    return SizedBox(
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
                  decoration: BoxDecoration(color: Colors.grey[200]),
                  child: const Center(
                    child: FaIcon(FontAwesomeIcons.utensils, size: 150, color: Colors.blueAccent),
                  ),
                );
              },
            )
          : Container(
              decoration: BoxDecoration(color: Colors.grey[200]),
              child: const Center(
                child: FaIcon(FontAwesomeIcons.utensils, size: 150, color: Colors.blueAccent),
              ),
            ),
    );
  }

  Widget buildProductInfo(Map<String, dynamic> item, NumberFormat currencyFormat) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            item['name'],
            style: GoogleFonts.poppins(fontSize: 20, fontWeight: FontWeight.w600),
          ),
          const SizedBox(height: 8),
          Text(
            'Rp ${currencyFormat.format(item['price'].toInt())}',
            style: GoogleFonts.poppins(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.blueAccent),
          ),
          const SizedBox(height: 12),
          Text(
            item['availability'],
            style: GoogleFonts.poppins(
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: item['availability'] == 'SOLDOUT' ? Colors.red : Colors.blueAccent,
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              const FaIcon(FontAwesomeIcons.solidStar, color: Colors.yellow, size: 20),
              const SizedBox(width: 4),
              Text(
                '${item['rating']} (${item['sold']} terjual)',
                style: GoogleFonts.poppins(fontSize: 14, color: Colors.grey[600]),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              const FaIcon(FontAwesomeIcons.tag, color: Colors.blueAccent, size: 20),
              const SizedBox(width: 4),
              Text(
                item['category'],
                style: GoogleFonts.poppins(fontSize: 14, color: Colors.grey[600]),
              ),
            ],
          ),
          const SizedBox(height: 12),
        ],
      ),
    );
  }

  Widget buildDivider() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      child: Divider(color: Colors.grey[300], thickness: 8),
    );
  }

  Widget buildDescription(Map<String, dynamic> item) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Deskripsi Produk',
            style: GoogleFonts.poppins(fontSize: 16, fontWeight: FontWeight.w600),
          ),
          const SizedBox(height: 8),
          Text(
            item['description'],
            style: GoogleFonts.poppins(fontSize: 14, height: 1.5),
          ),
        ],
      ),
    );
  }
  Widget buildActionButton() {
  return Container(
    padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
    color: Colors.white,
    child: SizedBox(
      width: double.infinity,
      height: 50,
      child: ElevatedButton.icon(
        onPressed: () {
          // aksi tambah ke keranjang
        },
        icon: const Icon(Icons.add_shopping_cart),
        label: const Text('Tambah ke Keranjang'),
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.blueAccent,
          foregroundColor: Colors.white,
          textStyle: GoogleFonts.poppins(fontWeight: FontWeight.w600),
        ),
      ),
    ),
  );
}

}
