import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

class ProfileController extends GetxController {
  var isLoading = true.obs;
  var hasError = false.obs;
  var userData = {}.obs;
  var errorMessage = ''.obs;

  @override
  void onInit() {
    super.onInit();
    fetchUserProfile();
  }

  Future<void> fetchUserProfile() async {
    try {
      isLoading(true);
      hasError(false);
      errorMessage('');

      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';

      // Tambahkan ini untuk print token ke debug console
      print('Token: $token');

      final response = await http.get(
        Uri.parse('https://api.mmcproject.web.id/api/user/profile'),
        headers: {
          'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        if (data['metadata']['error'] == 0) {
          userData.value = data['dataUser'];
        } else {
          hasError(true);
          errorMessage(data['metadata']['message'] ?? 'Gagal memuat profil');
        }
      } else {
        hasError(true);
        errorMessage('Gagal mengambil data profil: ${response.statusCode}');
      }
    } catch (e) {
      hasError(true);
      errorMessage('Terjadi kesalahan: $e');
    } finally {
      isLoading(false);
    }
  }
}
