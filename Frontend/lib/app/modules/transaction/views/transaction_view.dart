import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import '../controllers/transaction_controller.dart';

class TransactionView extends GetView<TransactionController> {
  const TransactionView({super.key});

  Color getStatusColor(String status) {
    switch (status.toUpperCase()) {
      case 'PROSES':
        return Colors.orange;
      case 'SELESAI':
        return Colors.green;
      case 'DIBATALKAN':
        return Colors.red;
      default:
        return Colors.grey;
    }
  }

  @override
  Widget build(BuildContext context) {
    final currencyFormat = NumberFormat.currency(locale: 'id_ID', symbol: 'Rp ');

    return Scaffold(
      appBar: AppBar(
        title: const Text("Transaksi"),
        backgroundColor: Colors.blueAccent,
        foregroundColor: Colors.white,
      ),
      body: Obx(() {
        if (controller.isLoading.value) {
          return const Center(child: CircularProgressIndicator(color: Colors.blueAccent));
        }

        if (controller.dataTransaction.isEmpty) {
          return Center(
            child: Text(
              "Transaksi masih kosong.",
              style: GoogleFonts.poppins(fontSize: 16, color: Colors.grey),
            ),
          );
        }

        return ListView.builder(
          padding: const EdgeInsets.all(12),
          itemCount: controller.dataTransaction.length,
          itemBuilder: (context, index) {
            final transaksi = controller.dataTransaction[index];
            final meja = transaksi['tb_meja']?['namaMeja'] ?? 'Tanpa Meja';
            final total = transaksi['total'];
            final status = transaksi['status'];
            final items = transaksi['detail_pemesanan'] as List;

            return Card(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              elevation: 2,
              margin: const EdgeInsets.symmetric(vertical: 6),
              child: ExpansionTile(
                title: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      currencyFormat.format(total),
                      style: GoogleFonts.poppins(fontWeight: FontWeight.bold),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: getStatusColor(status).withOpacity(0.15),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Text(
                        status,
                        style: GoogleFonts.poppins(
                          fontSize: 12,
                          color: getStatusColor(status),
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ],
                ),
                subtitle: Text("Meja: $meja", style: GoogleFonts.poppins(fontSize: 13)),
                children: items.map((item) {
                  final menu = item['tb_keranjang']['tb_menu'];
                  return ListTile(
                    onTap: () {
                      Get.toNamed('/detail', arguments: {'id': menu['id']});
                    },
                    leading: ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: Image.network(
                        "https://api.mmcproject.web.id${menu['gambar_menu']}",
                        width: 50,
                        height: 50,
                        fit: BoxFit.cover,
                        errorBuilder: (_, __, ___) =>
                            const Icon(Icons.fastfood, color: Colors.grey),
                      ),
                    ),
                    title: Text(menu['nama'], style: GoogleFonts.poppins()),
                    subtitle: Text("Catatan: ${item['note'] ?? '-'}"),
                    trailing: Text(
                      currencyFormat.format(menu['harga']),
                      style: GoogleFonts.poppins(fontWeight: FontWeight.w500),
                    ),
                  );
                }).toList(),
              ),
            );
          },
        );
      }),
    );
  }
}
