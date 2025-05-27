import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import 'package:image_picker/image_picker.dart';

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

  Future<void> updateUserProfile(Map<String, String> updatedData,
      {XFile? imageFile}) async {
    isLoading.value = true;
    hasError.value = false;
    errorMessage.value = '';

    try {
      var request = http.MultipartRequest(
        'PATCH',
        Uri.parse('https://api.mmcproject.web.id/api/user/profile'),
      );
      final prefs = await SharedPreferences.getInstance();
      final token = prefs.getString('jwt_token') ?? '';

      // Add headers
      request.headers['Authorization'] = 'Bearer $token';

      // Add text fields
      updatedData.forEach((key, value) {
        if (value.isNotEmpty) {
          request.fields[key] = value;
        }
      });

      // Add image file if provided
      if (imageFile != null) {
        request.files.add(
            await http.MultipartFile.fromPath('imageProfile', imageFile.path));
      }

      // Send request
      final response = await request.send();
      final responseBody = await response.stream.bytesToString();
      final responseData = jsonDecode(responseBody);

      if (response.statusCode == 200) {
        userData.value = responseData['dataUser'] ?? userData.value;
        Get.snackbar(
          'Sukses',
          responseData['metadata']['message'] ??
              'Data Pengguna Berhasil Diperbarui!!!',
          snackPosition: SnackPosition.TOP,
          backgroundColor: Colors.green,
          colorText: Colors.white,
        );
      } else if (response.statusCode == 400) {
        hasError.value = true;
        errorMessage.value = responseData['error'] ?? 'Tipe data tidak valid.';
        Get.snackbar('Error', errorMessage.value,
            backgroundColor: Colors.red, colorText: Colors.white);
      } else if (response.statusCode == 409) {
        hasError.value = true;
        errorMessage.value = responseData['metadata']['message'] ??
            'Beberapa field sudah digunakan.';
        final errors = responseData['errors'] as List<dynamic>;
        String detailedError = errors.map((e) => e['message']).join('\n');
        Get.snackbar('Error', detailedError,
            backgroundColor: Colors.red, colorText: Colors.white);
      } else {
        hasError.value = true;
        errorMessage.value =
            responseData['error'] ?? 'Terjadi kesalahan pada server.';
        Get.snackbar('Error', errorMessage.value,
            backgroundColor: Colors.red, colorText: Colors.white);
      }
    } catch (e) {
      hasError.value = true;
      errorMessage.value = 'Terjadi kesalahan: $e';
      Get.snackbar('Error', errorMessage.value,
          backgroundColor: Colors.red, colorText: Colors.white);
    } finally {
      isLoading.value = false;
    }
  }
}
