// cart_view.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/chart_controller.dart';
import 'package:intl/intl.dart';

class ChartView extends StatelessWidget {
  final ChartController controller = Get.put(ChartController());
  final currencyFormat = NumberFormat.currency(locale: 'id_ID', symbol: 'Rp ');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Keranjang')),
      body: Obx(() {
        if (controller.isLoading.value) {
          return const Center(child: CircularProgressIndicator());
        }

        if (controller.cartItems.isEmpty) {
          return const Center(child: Text('Keranjang masih kosong'));
        }

        return ListView.builder(
          itemCount: controller.cartItems.length,
          itemBuilder: (context, index) {
            final item = controller.cartItems[index];
            final menu = item['tb_menu'];
            return Card(
              margin: const EdgeInsets.all(8),
              child: ListTile(
                leading: Image.network(
                  'https://api.mmcproject.web.id${menu['gambar_menu']}',
                  width: 50,
                  height: 50,
                  errorBuilder: (_, __, ___) => const Icon(Icons.image),
                ),
                title: Text(menu['nama'] ?? ''),
                subtitle: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Harga: ${currencyFormat.format(menu['harga'])}'),
                    Text('Jumlah: ${item['quantity']}'),
                    Text('Total: ${currencyFormat.format(item['total'])}'),
                  ],
                ),
              ),
            );
          },
        );
      }),
    );
  }
}
