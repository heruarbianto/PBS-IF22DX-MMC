import 'dart:convert';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class ChartController extends GetxController {
  var cartItems = [].obs;
  var isLoading = false.obs;
  var selectedItems = <bool>[].obs; // Checkbox per item
  var totalHarga = 0.obs;

  @override
  void onInit() {
    super.onInit();
    fetchCart();
  }

  Future<void> fetchCart() async {
    try {
      isLoading.value = true;
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';
      
      print('Token: $token');

      final response = await http.get(
        Uri.parse('https://api.mmcproject.web.id/api/user/chart'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        final jsonResponse = json.decode(response.body);
        final data = jsonResponse['dataChart'] ?? [];

        cartItems.value = data;
        selectedItems.value = List<bool>.filled(data.length, true); // default: semua dipilih
        calculateTotal();
      } else {
        Get.snackbar('Error', 'Gagal memuat keranjang');
      }
    } catch (e) {
      Get.snackbar('Error', 'Terjadi kesalahan: $e');
    } finally {
      isLoading.value = false;
    }
  }

  void toggleSelection(int index) {
    selectedItems[index] = !selectedItems[index];
    calculateTotal();
  }

  void calculateTotal() {
    int total = 0;
    for (int i = 0; i < cartItems.length; i++) {
      if (selectedItems[i]) {
        total += cartItems[i]['total'] as int;
      }
    }
    totalHarga.value = total;
  }

  void selectAll(bool value) {
    selectedItems.value = List<bool>.filled(cartItems.length, value);
    calculateTotal();
  }

  Future<void> updateQuantity(int index, int newQuantity) async {
      cartItems[index]['quantity'] = newQuantity;
    try {
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';

      final response = await http.post(
        Uri.parse('https://api.mmcproject.web.id/api/user/chart'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
        body: json.encode({'quantity': newQuantity, 'idMenu': cartItems[index]['tb_menu']['id']}),
      );

      if (response.statusCode == 200) {
        cartItems[index]['quantity'] = newQuantity;
        cartItems[index]['total'] = cartItems[index]['tb_menu']['harga'] * newQuantity;
        cartItems.refresh();
        calculateTotal();
      } else {
        Get.snackbar('Error', 'Gagal memperbarui jumlah');
      }
    } catch (e) {
      Get.snackbar('Error', 'Terjadi kesalahan: $e');
    }
  }

  void incrementQuantity(int index) {
    updateQuantity(index, cartItems[index]['quantity'] + 1);
  }

  void decrementQuantity(int index) {
    if (cartItems[index]['quantity'] > 1) {
      updateQuantity(index, cartItems[index]['quantity'] - 1);
    }
  }
  void removeItem(int index) {
      updateQuantity(index, cartItems[index]['quantity'] - 1);
  }
}