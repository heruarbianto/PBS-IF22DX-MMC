import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:pbs_mmc_tukoyo/app/modules/checkout/bindings/checkout_binding.dart';
import 'package:pbs_mmc_tukoyo/app/modules/checkout/views/checkout_view.dart';
import 'package:pbs_mmc_tukoyo/app/routes/app_pages.dart';
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

        // Responsive wrapper dengan background putih selebar keranjang
        return Center(
          child: Container(
            margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
            padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 0),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(24),
              boxShadow: [
                BoxShadow(
                  color: Colors.black12,
                  blurRadius: 12,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 800),
              child: Column(
                children: [
                  Expanded(
                    child: ListView.builder(
                      itemCount: controller.cartItems.length,
                      itemBuilder: (context, index) {
                        final item = controller.cartItems[index];
                        final menu = item['tb_menu'];
                        if (item['quantity'] >= 1)
                          return Container(
                            margin: const EdgeInsets.symmetric(
                                vertical: 3, horizontal: 12),
                            padding: const EdgeInsets.all(5),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(
                                  color: Colors.blueAccent, width: 1),
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
                                        child: const Icon(Icons.image,
                                            color: Colors.grey),
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
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
                                          item['quantity'] == 1
                                              ? IconButton(
                                                  icon: const Icon(
                                                      Icons.delete_outline,
                                                      color: Colors.red),
                                                  onPressed: () {
                                                    showDialog(
                                                      context: context,
                                                      builder: (context) =>
                                                          AlertDialog(
                                                        title: const Text(
                                                            'Konfirmasi'),
                                                        content: const Text(
                                                            'Yakin ingin menghapus item dari keranjang?'),
                                                        actions: [
                                                          TextButton(
                                                            onPressed: () =>
                                                                Navigator.of(
                                                                        context)
                                                                    .pop(),
                                                            child: const Text(
                                                                'Batal',
                                                                style: TextStyle(
                                                                    color: Colors
                                                                        .blueAccent)),
                                                          ),
                                                          TextButton(
                                                            child: const Text(
                                                                'Hapus',
                                                                style: TextStyle(
                                                                    color: Colors
                                                                        .red)),
                                                            onPressed: () {
                                                              Navigator.of(
                                                                      context)
                                                                  .pop();
                                                              controller
                                                                  .removeItem(
                                                                      index);
                                                            },
                                                          ),
                                                        ],
                                                      ),
                                                    );
                                                  },
                                                )
                                              : IconButton(
                                                  icon: const Icon(
                                                      Icons
                                                          .remove_circle_outline,
                                                      color: Colors.grey),
                                                  onPressed: () => controller
                                                      .decrementQuantity(index),
                                                ),
                                          Text(item['quantity'].toString(),
                                              style: const TextStyle(
                                                  fontSize: 16)),
                                          IconButton(
                                            icon: const Icon(
                                                Icons.add_circle_outline,
                                                color: Colors.grey),
                                            onPressed: () => controller
                                                .incrementQuantity(index),
                                          ),
                                          const Spacer(),
                                          // Text(
                                          //   'Total: ${currencyFormat.format(item['total'])}',
                                          //   style:
                                          //       const TextStyle(fontSize: 13),
                                          // ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          );
                        return const SizedBox.shrink();
                      },
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 16, vertical: 12),
                    margin: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      border: Border.all(color: Colors.blueAccent, width: 1),
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [
                        BoxShadow(color: Colors.black12, blurRadius: 6)
                      ],
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
                                  currencyFormat
                                      .format(controller.totalHarga.value),
                                  style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 13,
                                      color: Colors.black),
                                )),
                          ],
                        ),
                        const SizedBox(width: 10),
                        ElevatedButton(
                          onPressed: () {
                            final selectedItems = controller.getSelectedItems();
                            for (var item in selectedItems) {
                              print(
                                  'Item: ${item['id']} | Note: ${item['note']}');
                            }
                            if (selectedItems.isEmpty) {
                              Get.snackbar(
                                  "Peringatan", "Tidak ada item yang dipilih");
                              return;
                            }
                            Get.toNamed(
                              Routes.CHECKOUT,
                              arguments: {
                                'items': controller.cartItems,
                                'selectedItems': controller.getSelectedItems(),
                              },
                            );
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
              ),
            ),
          ),
        );
      }),
    );
  }
}
