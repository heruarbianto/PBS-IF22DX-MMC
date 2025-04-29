import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class AuthController extends GetxController {
  final isLoading = false.obs;

  Future<http.Response> _makeRequest(String url, Map<String, dynamic> body) async {
    final uri = Uri.parse(url);
    var response = await http.post(
      uri,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(body),
    );

    // Tangani redirect (308 Permanent Redirect)
    if (response.statusCode == 308) {
      print('Redirecting to: ${response.body}');
      final redirectUrl = response.body.startsWith('http')
          ? response.body
          : 'http://192.168.18.8:1220${response.body}'; // Tambahkan base URL jika relatif
      return _makeRequest(redirectUrl, body); // Rekursif untuk mengikuti redirect
    }

    return response;
  }

  Future<void> login(String email, String password) async {
    if (email.isEmpty || password.isEmpty) {
      Get.snackbar('Error', 'Email dan password tidak boleh kosong');
      return;
    }

    isLoading.value = true;

    const String apiUrl = 'http://192.168.18.8:1220/api/user/login';

    final Map<String, dynamic> body = {
      'emailValue': email,
      'passwordValue': password,
    };

    try {
      final response = await _makeRequest(apiUrl, body);

      print('Login Response status: ${response.statusCode}');
      print('Login Response body: ${response.body}');

      final responseData = jsonDecode(response.body);

      if (response.statusCode == 200) {
        Get.snackbar(
          'Sukses',
          responseData['metadata']['message'],
          backgroundColor: Colors.green,
          colorText: Colors.white,
        );
        Get.offAllNamed('/menu');
      } else {
        Get.snackbar(
          'Error',
          responseData['metadata']['message'],
          backgroundColor: Colors.red,
          colorText: Colors.white,
        );
      }
    } catch (e) {
      print('Login Error: $e');
      Get.snackbar(
        'Error',
        'Gagal terhubung ke server. Periksa koneksi internet Anda.',
        backgroundColor: Colors.red,
        colorText: Colors.white,
      );
    } finally {
      isLoading.value = false;
    }
  }

  Future<void> register(
    String name,
    String username,
    String email,
    String noHp,
    String alamat,
    String password,
  ) async {
    if (name.isEmpty ||
        username.isEmpty ||
        email.isEmpty ||
        noHp.isEmpty ||
        alamat.isEmpty ||
        password.isEmpty) {
      Get.snackbar('Error', 'Semua field harus diisi');
      return;
    }

    isLoading.value = true;

    const String apiUrl = 'http://192.168.18.8:1220/api/user/';

    final Map<String, dynamic> body = {
      'namaValue': name,
      'usernameValue': username,
      'emailValue': email,
      'noHpValue': noHp,
      'alamatValue': alamat,
      'passwordValue': password,
    };

    try {
      final response = await _makeRequest(apiUrl, body);

      print('Register Response status: ${response.statusCode}');
      print('Register Response body: ${response.body}');

      final responseData = jsonDecode(response.body);

      if (response.statusCode == 201) {
        Get.snackbar(
          'Sukses',
          responseData['metadata']['message'],
          backgroundColor: Colors.green,
          colorText: Colors.white,
        );
        Get.offNamed('/login');
      } else if (response.statusCode == 409) {
        String errorMessage = responseData['metadata']['message'];
        List errors = responseData['errors'] ?? [];
        if (errors.isNotEmpty) {
          errorMessage += '\n';
          for (var error in errors) {
            errorMessage += '- ${error['message']}\n';
          }
        }
        Get.snackbar(
          'Error',
          errorMessage,
          backgroundColor: Colors.red,
          colorText: Colors.white,
        );
      } else {
        Get.snackbar(
          'Error',
          'Terjadi kesalahan: ${responseData['metadata']['message'] ?? 'Unknown error'}',
          backgroundColor: Colors.red,
          colorText: Colors.white,
        );
      }
    } catch (e) {
      print('Register Error: $e');
      Get.snackbar(
        'Error',
        'Gagal terhubung ke server. Periksa koneksi internet Anda.',
        backgroundColor: Colors.red,
        colorText: Colors.white,
      );
    } finally {
      isLoading.value = false;
    }
  }

  Future<void> forgotPassword(String email) async {
    if (email.isEmpty) {
      Get.snackbar('Error', 'Email tidak boleh kosong');
      return;
    }

    isLoading.value = true;

    const String apiUrl = 'http://192.168.18.8:1220/api/user/forgot-password';

    final Map<String, dynamic> body = {
      'emailValue': email,
    };

    try {
      final response = await _makeRequest(apiUrl, body);

      print('Forgot Password Response status: ${response.statusCode}');
      print('Forgot Password Response body: ${response.body}');

      final responseData = jsonDecode(response.body);

      if (response.statusCode == 200) {
        Get.snackbar(
          'Sukses',
          responseData['metadata']['message'],
          backgroundColor: Colors.green,
          colorText: Colors.white,
        );
        Get.offNamed('/login');
      } else {
        Get.snackbar(
          'Error',
          responseData['metadata']['message'],
          backgroundColor: Colors.red,
          colorText: Colors.white,
        );
      }
    } catch (e) {
      print('Forgot Password Error: $e');
      Get.snackbar(
        'Error',
        'Gagal terhubung ke server. Periksa koneksi internet Anda.',
        backgroundColor: Colors.red,
        colorText: Colors.white,
      );
    } finally {
      isLoading.value = false;
    }
  }
}