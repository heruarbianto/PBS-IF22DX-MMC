import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:pbs_mmc_tukoyo/app/modules/chart/views/chart_view.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

class MenusController extends GetxController {
  var menuList = <Map<String, dynamic>>[].obs;
  var filteredMenuList = <Map<String, dynamic>>[].obs;
  var isLoading = false.obs;
  var selectedCategory = 'All'.obs;
  var hasConnectionError = false.obs;
  var selectedIndex = 0.obs;
  var isLoggedIn = false.obs;

  @override
  void onInit() {
    super.onInit();
    checkLoginStatus();
    fetchMenu();
  }

  Future<void> checkLoginStatus() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('jwt_token') ?? '';
    isLoggedIn.value = token.isNotEmpty;
    if (kDebugMode) {
      debugPrint('Checking login status: ${isLoggedIn.value} (Token: $token)');
    }
  }

  Future<void> fetchMenu({bool isRefresh = false}) async {
    try {
      if (isRefresh) {
        isLoading.value = true;
        hasConnectionError.value = false;
      }

      final response = await http.get(
        Uri.parse('https://api.mmcproject.web.id/api/menu'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final jsonData = jsonDecode(response.body) as Map<String, dynamic>;
        if (jsonData['metadata']['error'] == 0) {
          var data = jsonData['dataMenu'] as List;
          menuList.value = data.map((item) {
            return {
              'id': item['id'],
              'name': item['nama'],
              'price': item['harga'],
              'rating': 4.5, // Adjust if API provides rating
              'sold': '50+ terjual', // Adjust if API provides sold count
              'image': 'https://api.mmcproject.web.id${item['gambar_menu']}',
              'category': item['kategori'],
              'availability': item['ketersediaan'],
            };
          }).toList().cast<Map<String, dynamic>>();
          filterMenu();
          hasConnectionError.value = false;
        } else {
          hasConnectionError.value = true;
          Get.snackbar(
            'Gagal Memuat Menu',
            jsonData['metadata']['message'] ?? 'Tidak dapat memuat daftar menu.',
            snackPosition: SnackPosition.TOP,
            backgroundColor: Colors.red,
            colorText: Colors.white,
          );
        }
      } else {
        hasConnectionError.value = true;
        Get.snackbar(
          'Gagal Memuat Menu',
          'Tidak dapat terhubung ke server. Kode status: ${response.statusCode}',
          snackPosition: SnackPosition.TOP,
          backgroundColor: Colors.red,
          colorText: Colors.white,
        );
      }
    } catch (e) {
      hasConnectionError.value = true;
      Get.snackbar(
        'Koneksi Gagal',
        'Periksa koneksi internet Anda dan coba lagi.',
        snackPosition: SnackPosition.TOP,
        backgroundColor: Colors.red,
        colorText: Colors.white,
      );
    } finally {
      isLoading.value = false;
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

  Future<void> changeTabIndex(int index) async {
    if (index == 1 || index == 2) {
      // Check login status for Transaction (1) and Profile (2) tabs
      await checkLoginStatus();
      if (!isLoggedIn.value) {
        Get.toNamed('/login');
        return;
      }
    }
    selectedIndex.value = index;
  }

  Future<void> onCartClicked() async {
    await checkLoginStatus();
    if (isLoggedIn.value) {
      Get.toNamed('/chart');
    } else {
      Get.toNamed('/login');
    }
  }
}