import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import '../../chart/controllers/chart_controller.dart'; // Pastikan path ini sesuai dengan struktur proyek kamu

class DetailController extends GetxController {
  var menuItem = <String, dynamic>{}.obs; // Data item dari API
  var isLoading = true.obs; // Status loading
  var isAddingToCart = false.obs; // Status loading untuk tambah ke keranjang

  @override
  void onInit() {
    fetchMenuItem();
    super.onInit();
  }

  Future<void> fetchMenuItem() async {
    try {
      isLoading(true);
      final int id = Get.arguments['id'] as int;
      final response = await http.get(Uri.parse('https://api.margataqwa.my.id/api/menu/$id'));

      if (response.statusCode == 200) {
        final jsonData = jsonDecode(response.body);
        if (jsonData['metadata']['error'] == 0) {
          final item = jsonData['dataMenu'];
          menuItem.value = {
            'id': item['id'],
            'name': item['nama'],
            'description': item['deskripsi'],
            'price': item['harga'],
            'category': item['kategori'],
            'image': 'https://api.margataqwa.my.id${item['gambar_menu']}',
            'availability': item['ketersediaan'],
            'rating': 5.0, // Dummy data
            'sold': '3', // Dummy data
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

  Future<void> addToCart() async {
    try {
      isAddingToCart(true);

      // Ambil token dari SharedPreferences
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';
      if (token.isEmpty) {
        Get.snackbar('Error', 'Silakan login terlebih dahulu');
        return;
      }

      // Ambil idMenu dari menuItem
      final int idMenu = menuItem['id'];
      int newQuantity = 1; // Default quantity untuk item baru

      // Cek apakah item sudah ada di keranjang
      final response = await http.get(
        Uri.parse('https://api.mmcproject.web.id/api/user/chart'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final jsonData = jsonDecode(response.body);
        final cartItems = jsonData['dataChart'] ?? [];
        final existingItem = cartItems.firstWhere(
          (item) => item['idMenu'] == idMenu && item['status'] == 'FALSE',
          orElse: () => null,
        );

        if (existingItem != null) {
          // Item sudah ada, tambah quantity
          newQuantity = existingItem['quantity'] + 1;
        }
      } else if (response.statusCode == 401) {
        Get.snackbar('Error', 'Token tidak valid atau sudah expired');
        return;
      } else {
        Get.snackbar('Error', 'Gagal memeriksa keranjang');
        return;
      }

      // Kirim request untuk menambah/memperbarui item di keranjang
      final postResponse = await http.post(
        Uri.parse('https://api.mmcproject.web.id/api/user/chart'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({
          'idMenu': idMenu,
          'quantity': newQuantity,
        }),
      );

      final responseData = jsonDecode(postResponse.body);

      if (postResponse.statusCode == 201) {
        Get.snackbar('Sukses', 'Item berhasil ditambahkan ke keranjang.');
        // Perbarui daftar keranjang
        final chartController = Get.find<ChartController>();
        await chartController.fetchCart();
      } else if (postResponse.statusCode == 200) {
        Get.snackbar('Sukses', 'Item keranjang berhasil diperbarui.');
        // Perbarui daftar keranjang
        final chartController = Get.find<ChartController>();
        await chartController.fetchCart();
      } else if (postResponse.statusCode == 400) {
        Get.snackbar('Error', responseData['metadata']['message']);
      } else if (postResponse.statusCode == 404) {
        Get.snackbar('Error', responseData['error']);
      } else if (postResponse.statusCode == 401) {
        Get.snackbar('Error', 'Token tidak valid atau sudah expired');
      } else {
        Get.snackbar('Error', 'Terjadi kesalahan pada server.');
      }
    } catch (e) {
      Get.snackbar('Error', 'Terjadi kesalahan: $e');
    } finally {
      isAddingToCart(false);
    }
  }
}