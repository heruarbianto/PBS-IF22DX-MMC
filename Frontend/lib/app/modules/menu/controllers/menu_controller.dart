import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

class MenusController extends GetxController {
  var menuList = <Map<String, dynamic>>[].obs;
  var filteredMenuList = <Map<String, dynamic>>[].obs;
  var isLoading = true.obs;
  var selectedCategory = 'All'.obs;
  var hasConnectionError = false.obs;
  var selectedIndex = 0.obs;

  @override
  void onInit() {
    fetchMenu();
    super.onInit();
  }

  Future<void> fetchMenu({bool isRefresh = false}) async {
    if (isRefresh) {
      isLoading(true);
      hasConnectionError(false);
    }
    try {
      final response = await http.get(Uri.parse('https://api.margataqwa.my.id/api/menu'));
      if (response.statusCode == 200) {
        final jsonData = jsonDecode(response.body);
        if (jsonData['metadata']['error'] == 0) {
          var data = jsonData['dataMenu'] as List;
          menuList.value = data.map((item) {
            return {
              'id': item['id'],
              'name': item['nama'],
              'price': item['harga'],
              'rating': 4.5,
              'sold': '50+ terjual',
              'image': 'https://api.margataqwa.my.id${item['gambar_menu']}',
              'category': item['kategori'],
              'availability': item['ketersediaan'],
            };
          }).toList().cast<Map<String, dynamic>>();
          filterMenu();
          hasConnectionError(false);
        } else {
          Get.snackbar('Error', 'Gagal mengambil data: ${jsonData['metadata']['message']}');
          hasConnectionError(true);
        }
      } else {
        Get.snackbar('Error', 'Gagal mengambil data dari server');
        hasConnectionError(true);
      }
    } catch (e) {
      Get.snackbar('Error', 'Gagal terhubung ke server. Periksa koneksi internet Anda.');
      hasConnectionError(true);
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

  void changeTabIndex(int index) {
    selectedIndex.value = index;
  }

  Future<bool> isLoggedIn() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('jwt_token');
    print('Checking token in MenusController: $token');
    return token != null && token.isNotEmpty;
  }

  Future<void> onCartClicked() async {
    bool loggedIn = await isLoggedIn();
    print('User logged in status: $loggedIn');
    if (loggedIn) {
      Get.snackbar('Info', 'Menuju halaman keranjang (placeholder)');
    } else {
      Get.toNamed('/login');
    }
  }
}