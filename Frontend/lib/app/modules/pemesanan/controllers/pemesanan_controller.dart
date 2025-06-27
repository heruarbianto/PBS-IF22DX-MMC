import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PemesananController extends GetxController {
  var isLoading = false.obs;
  var dataPemesanan = [].obs;

  @override
  void onInit() {
    super.onInit();
    fetchPemesanan();
  }

  Future<void> fetchPemesanan() async {
    isLoading.value = true;
    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';

      final response = await http.get(
        Uri.parse('https://api.mmcproject.web.id/api/pemesanan'),
        headers: {'Authorization': 'Bearer $token'},
      );

      final body = jsonDecode(response.body);
      if (response.statusCode == 200 && body['metadata']['error'] == 0) {
        dataPemesanan.value = body['dataPemesanan'];
      } else {
        Get.snackbar("Gagal", body['metadata']['message']);
      }
    } catch (e) {
      Get.snackbar("Error", "Terjadi kesalahan: $e");
    } finally {
      isLoading.value = false;
    }
  }
}
