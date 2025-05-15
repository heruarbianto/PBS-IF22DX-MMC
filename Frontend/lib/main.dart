import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'app/routes/app_pages.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Makanan & Minuman',
      initialRoute: AppPages.INITIAL, // Halaman awal diatur ke menu
      getPages: AppPages.routes, // Daftar halaman dari app_pages.dart
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
    );
  }
}