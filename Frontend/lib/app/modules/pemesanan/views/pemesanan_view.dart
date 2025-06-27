import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/pemesanan_controller.dart';

class PemesananView extends GetView<PemesananController> {
  const PemesananView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Daftar Pemesanan')),
      body: Obx(() {
        if (controller.isLoading.value) {
          return const Center(child: CircularProgressIndicator());
        }

        if (controller.dataPemesanan.isEmpty) {
          return const Center(child: Text("Pesanan masih kosong."));
        }

        return ListView.builder(
          itemCount: controller.dataPemesanan.length,
          itemBuilder: (context, index) {
            final pesanan = controller.dataPemesanan[index];
            final meja = pesanan['tb_meja']?['namaMeja'] ?? 'Tanpa Meja';
            final total = pesanan['total'];
            final status = pesanan['status'];
            final items = pesanan['detail_pemesanan'] as List;

            return Card(
              margin: const EdgeInsets.all(8),
              elevation: 4,
              child: ExpansionTile(
                title: Text("Total: Rp$total | Status: $status"),
                subtitle: Text("Meja: $meja"),
                children: items.map((item) {
                  final menu = item['tb_keranjang']['tb_menu'];
                  return ListTile(
                    leading: Image.network(
                      "https://api.mmcproject.web.id${menu['gambar_menu']}",
                      width: 40,
                      errorBuilder: (_, __, ___) => const Icon(Icons.fastfood),
                    ),
                    title: Text(menu['nama']),
                    subtitle: Text("${item['note']}"),
                    trailing: Text("Rp${menu['harga']}"),
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
