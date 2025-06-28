import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter/material.dart';

class CheckoutController extends GetxController {
  var isSubmitting = false.obs;
  var metodePembayaran = 'TUNAI'.obs;
  var idMejaController = TextEditingController();
  var notes = <int, TextEditingController>{}.obs;

  final List<Map<String, dynamic>> selectedItems;

  CheckoutController(List items, {required this.selectedItems});

  Future<void> submitPesanan() async {
    if (idMejaController.text.isEmpty) {
      Get.snackbar("Error", "ID Meja harus diisi");
      return;
    }

    isSubmitting.value = true;

    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';

      final keranjangItems = selectedItems.map((item) {
        final idKeranjang = item['id'];
        final note = notes[idKeranjang]?.text.trim();
        return {
          "idKeranjang": idKeranjang,
          if (note != null && note.isNotEmpty) "note": note
        };
      }).toList();

      final body = jsonEncode({
        "idMeja": int.tryParse(idMejaController.text),
        "metode": metodePembayaran.value,
        "keranjangItems": keranjangItems
      });

      final response = await http.post(
        Uri.parse("https://api.mmcproject.web.id/api/pemesanan"),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer $token",
        },
        body: body,
      );

      final result = jsonDecode(response.body);

      if (response.statusCode == 201 && result['metadata']['error'] == 0) {
        Get.back();
        Get.snackbar("Sukses", result['metadata']['message']);
      } else {
        Get.snackbar("Gagal", result['metadata']['message']);
      }
    } catch (e) {
      Get.snackbar("Error", "Terjadi kesalahan: $e");
    } finally {
      isSubmitting.value = false;
    }
  }
}
