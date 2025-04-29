import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DetailController extends GetxController {
  var menuItem = <String, dynamic>{}.obs; // Data item dari API
  var isLoading = true.obs; // Status loading

  @override
  void onInit() {
    fetchMenuItem();
    super.onInit();
  }

  Future<void> fetchMenuItem() async {
    try {
      isLoading(true);
      // Ambil id dari arguments yang dikirim oleh halaman menu
      final int id = Get.arguments['id'] as int;
      final response = await http.get(Uri.parse('http://192.168.18.8:1220/api/menu/$id'));

      if (response.statusCode == 200) {
        final jsonData = jsonDecode(response.body);
        if (jsonData['metadata']['error'] == 0) {
          final item = jsonData['dataMenu'];
          menuItem.value = {
            'id': item['id'],
            'name': item['nama'],
            'description': item['deskripsi'], // Sesuai JSON
            'price': item['harga'],
            'category': item['kategori'],
            'image': 'http://192.168.18.8:1220${item['gambar_menu']}', // Sesuaikan dengan base URL API
            'availability': item['ketersediaan'],
            'rating': 5.0, // Dummy data karena tidak ada di JSON
            'sold': '3', // Dummy data karena tidak ada di JSON
          };
        } else {
          Get.snackbar('Error', 'Gagal mengambil data: ${jsonData['metadata']['message']}');
        }
      } else {
        Get.snackbar('Error', 'Gagal mengambil data dari server');
      }
    } catch (e) {
      Get.snackbar('Error', 'Terjadi kesalahan: $e');
    } finally {
      isLoading(false);
    }
  }
}