import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import '../controllers/chart_controller.dart';

class ChartView extends StatelessWidget {
  final ChartController controller = Get.put(ChartController());
  final currencyFormat = NumberFormat.currency(locale: 'id_ID', symbol: 'Rp ');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F5F5),
      appBar: AppBar(
        title: const Text('Keranjang'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Get.toNamed('/menu'),
        ),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 1,
      ),
      body: Obx(() {
        if (controller.isLoading.value) {
          return const Center(child: CircularProgressIndicator());
        }

        if (controller.cartItems.isEmpty) {
          return const Center(child: Text('Keranjang masih kosong'));
        }

        return Column(
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: controller.cartItems.length,
                itemBuilder: (context, index) {
                  final item = controller.cartItems[index];
                  final menu = item['tb_menu'];
                  return Container(
                    margin:
                        const EdgeInsets.symmetric(vertical: 6, horizontal: 12),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey.withOpacity(0.1),
                          blurRadius: 6,
                          offset: const Offset(0, 4),
                        )
                      ],
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Obx(() => Checkbox(
                              value: controller.selectedItems[index],
                              onChanged: (value) =>
                                  controller.toggleSelection(index),
                              activeColor: Colors.blueAccent,
                            )),
                        GestureDetector(
                          onTap: () {
                            // Navigasi ke halaman detail dengan passing argument id
                            Get.toNamed('/detail',
                                arguments: {'id': menu['id']});
                          },
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: Image.network(
                              'https://api.mmcproject.web.id${menu['gambar_menu']}',
                              width: 80,
                              height: 80,
                              fit: BoxFit.cover,
                              errorBuilder: (_, __, ___) => Container(
                                width: 80,
                                height: 80,
                                color: Colors.grey[200],
                                child:
                                    const Icon(Icons.image, color: Colors.grey),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(menu['nama'] ?? '',
                                  style: const TextStyle(
                                      fontWeight: FontWeight.w600,
                                      fontSize: 15)),
                              const SizedBox(height: 6),
                              Text(
                                currencyFormat.format(menu['harga']),
                                style: const TextStyle(
                                    color: Colors.red,
                                    fontWeight: FontWeight.bold),
                              ),
                              const SizedBox(height: 10),
                              Row(
                                children: [
                                  IconButton(
                                    icon: const Icon(
                                        Icons.remove_circle_outline,
                                        color: Colors.grey),
                                    onPressed: () =>
                                        controller.decrementQuantity(index),
                                  ),
                                  Text(item['quantity'].toString(),
                                      style: const TextStyle(fontSize: 16)),
                                  IconButton(
                                    icon: const Icon(Icons.add_circle_outline,
                                        color: Colors.grey),
                                    onPressed: () =>
                                        controller.incrementQuantity(index),
                                  ),
                                  const Spacer(),
                                  Text(
                                    'Total: ${currencyFormat.format(item['total'])}',
                                    style: const TextStyle(fontSize: 13),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              decoration: BoxDecoration(
                color: Colors.white,
                boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 6)],
              ),
              child: Row(
                children: [
                  Obx(() => Checkbox(
                        value: controller.selectedItems
                            .every((selected) => selected),
                        onChanged: (value) =>
                            controller.selectAll(value ?? false),
                        activeColor: Colors.blueAccent,
                      )),
                  const Text("Semua",
                      style: TextStyle(fontWeight: FontWeight.w500)),
                  const Spacer(),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      const Text("Total", style: TextStyle(fontSize: 13)),
                      Obx(() => Text(
                            currencyFormat.format(controller.totalHarga.value),
                            style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 16,
                                color: Colors.black),
                          )),
                    ],
                  ),
                  const SizedBox(width: 10),
                  ElevatedButton(
                    onPressed: () {
                      Get.snackbar(
                          'Info', 'Proses pembelian belum diimplementasikan');
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      side: const BorderSide(color: Colors.blueAccent),
                      padding: const EdgeInsets.symmetric(
                          horizontal: 24, vertical: 12),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    child: const Text(
                      "Beli",
                      style: TextStyle(
                          color: Colors.blueAccent,
                          fontWeight: FontWeight.bold,
                          fontSize: 15),
                    ),
                  ),
                ],
              ),
            ),
          ],
        );
      }),
    );
  }
}
