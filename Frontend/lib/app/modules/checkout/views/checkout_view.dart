import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import '../controllers/checkout_controller.dart';

class CheckoutView extends GetView<CheckoutController> {
  const CheckoutView({super.key});

  @override
  Widget build(BuildContext context) {
    final border = OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: const BorderSide(color: Colors.blueAccent),
    );

    final currencyFormat = NumberFormat.currency(locale: 'id_ID', symbol: 'Rp ');

    return Scaffold(
      backgroundColor: const Color(0xFFF5F6FA),
      appBar: AppBar(
        title: const Text('Konfirmasi Pemesanan'),
        backgroundColor: Colors.blueAccent,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Material(
              elevation: 2,
              borderRadius: BorderRadius.circular(12),
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: TextField(
                  controller: controller.idMejaController,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: "ID Meja",
                    border: border,
                    focusedBorder: border.copyWith(
                      borderSide: const BorderSide(color: Colors.blue, width: 2),
                    ),
                    prefixIcon: const Icon(Icons.event_seat_rounded),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: Material(
                elevation: 2,
                borderRadius: BorderRadius.circular(12),
                color: Colors.white,
                child: ListView.builder(
                  padding: const EdgeInsets.all(12),
                  itemCount: controller.selectedItems.length,
                  itemBuilder: (context, index) {
                    final item = controller.selectedItems[index];
                    final id = item['id'];
                    final menu = item['tb_menu'];
                    controller.notes.putIfAbsent(id, () => TextEditingController());

                    return Container(
                      margin: const EdgeInsets.only(bottom: 12),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.blueAccent.withOpacity(0.2)),
                        borderRadius: BorderRadius.circular(12),
                        color: Colors.grey[50],
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: Image.network(
                              'https://api.mmcproject.web.id${menu['gambar_menu']}',
                              width: 60,
                              height: 60,
                              fit: BoxFit.cover,
                              errorBuilder: (_, __, ___) => Container(
                                width: 60,
                                height: 60,
                                color: Colors.grey[200],
                                child: const Icon(Icons.image, color: Colors.grey),
                              ),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(menu['nama'],
                                    style: GoogleFonts.poppins(
                                        fontSize: 14, fontWeight: FontWeight.w600)),
                                const SizedBox(height: 4),
                                Text(
                                  "${currencyFormat.format(menu['harga'])} x ${item['quantity']}",
                                  style: const TextStyle(color: Colors.black87),
                                ),
                                const SizedBox(height: 8),
                                TextField(
                                  controller: controller.notes[id],
                                  decoration: InputDecoration(
                                    hintText: "Catatan (opsional)",
                                    prefixIcon: const Icon(Icons.notes_rounded),
                                    border: border,
                                  ),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    );
                  },
                ),
              ),
            ),
            const SizedBox(height: 20),
            Material(
              elevation: 2,
              borderRadius: BorderRadius.circular(12),
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Obx(() => DropdownButtonFormField<String>(
                      value: controller.metodePembayaran.value,
                      items: ['TUNAI', 'ePayment'].map((e) {
                        return DropdownMenuItem(
                          value: e,
                          child: Text(e),
                        );
                      }).toList(),
                      onChanged: (val) =>
                          controller.metodePembayaran.value = val ?? 'TUNAI',
                      decoration: InputDecoration(
                        labelText: "Metode Pembayaran",
                        border: border,
                        prefixIcon: const Icon(Icons.payment_rounded),
                      ),
                    )),
              ),
            ),
            const SizedBox(height: 20),
            Obx(() {
              final total = controller.selectedItems.fold<int>(
                  0,
                  (sum, item) =>
                      sum + (item['tb_menu']['harga'] as int) * (item['quantity'] as int));
              return Row(
                children: [
                  Expanded(
                    child: Text(
                      'Total: ${currencyFormat.format(total)}',
                      style: GoogleFonts.poppins(
                          fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                  ),
                  ElevatedButton(
                    onPressed: controller.isSubmitting.value
                        ? null
                        : controller.submitPesanan,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blueAccent,
                      padding: const EdgeInsets.symmetric(
                          vertical: 14, horizontal: 24),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12)),
                    ),
                    child: controller.isSubmitting.value
                        ? const SizedBox(
                            height: 20,
                            width: 20,
                            child: CircularProgressIndicator(
                              strokeWidth: 2,
                              color: Colors.white,
                            ),
                          )
                        : const Text(
                            "Kirim Pesanan",
                            style: TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 16),
                          ),
                  ),
                ],
              );
            }),
          ],
        ),
      ),
    );
  }
}