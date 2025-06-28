import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/checkout_controller.dart';

class CheckoutView extends GetView<CheckoutController> {
  const CheckoutView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Konfirmasi Pemesanan')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: controller.idMejaController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: "ID Meja"),
            ),
            const SizedBox(height: 12),
            Obx(() => DropdownButtonFormField<String>(
              value: controller.metodePembayaran.value,
              items: ['TUNAI', 'ePayment'].map((e) => DropdownMenuItem(
                value: e,
                child: Text(e),
              )).toList(),
              onChanged: (val) => controller.metodePembayaran.value = val ?? 'TUNAI',
              decoration: const InputDecoration(labelText: "Metode Pembayaran"),
            )),
            const SizedBox(height: 16),
            const Text("Catatan Tiap Item:"),
            Expanded(
              child: ListView.builder(
                itemCount: controller.selectedItems.length,
                itemBuilder: (context, index) {
                  final item = controller.selectedItems[index];
                  final id = item['id'];
                  final menu = item['tb_menu'];

                  controller.notes.putIfAbsent(id, () => TextEditingController());

                  return ListTile(
                    title: Text(menu['nama']),
                    subtitle: TextField(
                      controller: controller.notes[id],
                      decoration: const InputDecoration(
                        hintText: "Catatan (opsional)",
                      ),
                    ),
                  );
                },
              ),
            ),
            const SizedBox(height: 10),
            Obx(() => ElevatedButton(
              onPressed: controller.isSubmitting.value ? null : controller.submitPesanan,
              child: controller.isSubmitting.value
                ? const CircularProgressIndicator()
                : const Text("Kirim Pesanan"),
            )),
          ],
        ),
      ),
    );
  }
}
