import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MenusController extends GetxController {
  var menuList = <Map<String, dynamic>>[].obs; // Daftar menu yang reaktif
  var filteredMenuList = <Map<String, dynamic>>[].obs; // Daftar menu yang sudah difilter
  var isLoading = true.obs;
  var selectedCategory = 'All'.obs;
  var hasConnectionError = false.obs; // Status untuk error koneksi

  @override
  void onInit() {
    fetchMenu();
    super.onInit();
  }

  Future<void> fetchMenu({bool isRefresh = false}) async {
    if (isRefresh) {
      isLoading(true); // Reset loading state saat refresh
      hasConnectionError(false); // Reset error state saat refresh
    }
    try {
      final response = await http.get(Uri.parse('http://192.168.18.8:1220/api/menu'));
      if (response.statusCode == 200) {
        final jsonData = jsonDecode(response.body);
        if (jsonData['metadata']['error'] == 0) {
          var data = jsonData['dataMenu'] as List;
          menuList.value = data.map((item) {
            return {
              'id': item['id'],
              'name': item['nama'],
              'price': item['harga'],
              'rating': 4.5, // Dummy data
              'sold': '50+ terjual', // Dummy data
              'image': 'https://canden.bantulkab.go.id/assets/files/artikel/sedang_1515377400Jajan_Pasar_in_Jakarta.JPG', // Link gambar yang sama
              'category': item['kategori'],
              'availability': item['ketersediaan'],
            };
          }).toList().cast<Map<String, dynamic>>();
          filterMenu(); // Filter awal
          hasConnectionError(false); // Reset error jika berhasil
        } else {
          Get.snackbar('Error', 'Gagal mengambil data: ${jsonData['metadata']['message']}');
          hasConnectionError(true); // Set error jika gagal
        }
      } else {
        Get.snackbar('Error', 'Gagal mengambil data dari server');
        hasConnectionError(true); // Set error jika gagal
      }
    } catch (e) {
      Get.snackbar('Error', 'Gagal terhubung ke server. Periksa koneksi internet Anda.');
      hasConnectionError(true); // Set error jika gagal koneksi
    } finally {
      isLoading(false);
    }
  }

  void filterMenu({String searchQuery = '', String category = ''}) {
    if (category.isNotEmpty) {
      selectedCategory.value = category;
    }
    filteredMenuList.value = menuList.where((item) {
      bool matchesSearch = item['name'].toString().toLowerCase().contains(searchQuery.toLowerCase());
      bool matchesCategory = selectedCategory.value == 'All' || item['category'] == selectedCategory.value;
      bool isAvailable = item['availability'] == 'READY';
      return matchesSearch && matchesCategory && isAvailable;
    }).toList();
  }
}