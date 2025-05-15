import 'package:flutter/material.dart' hide MenuController;
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../controllers/menu_controller.dart';

class MenuView extends GetView<MenusController> {
  const MenuView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final NumberFormat currencyFormat = NumberFormat('#,###', 'id_ID');
    final TextEditingController searchController = TextEditingController();

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Makanan & Minuman',
          style: GoogleFonts.poppins(
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        flexibleSpace: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.blue, Colors.blueAccent],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
        ),
        actions: [
          IconButton(
            icon: const FaIcon(FontAwesomeIcons.cartShopping, color: Colors.white),
            onPressed: () {},
          ),
        ],
      ),
      body: Column(
        children: [
          // Search bar
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: TextField(
              controller: searchController,
              decoration: InputDecoration(
                hintText: 'Cari makanan atau minuman...',
                prefixIcon: const Icon(
                  Icons.search, // Mengganti ke ikon bawaan Flutter agar lebih pas
                  color: Colors.blue,
                  size: 24, // Menyesuaikan ukuran
                ),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30),
                  borderSide: BorderSide.none,
                ),
                filled: true,
                fillColor: Colors.grey[100],
                contentPadding: const EdgeInsets.symmetric(vertical: 0),
                hintStyle: const TextStyle(color: Colors.grey),
              ),
              onChanged: (value) {
                controller.filterMenu(searchQuery: value);
              },
            ),
          ),
          // Filter bar
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildFilterChip('All'),
                _buildFilterChip('MAKANAN'),
                _buildFilterChip('MINUMAN'),
              ],
            ),
          ),
          // Grid untuk menampilkan item dari API
          Expanded(
            child: RefreshIndicator(
              onRefresh: () async {
                await controller.fetchMenu(isRefresh: true);
              },
              color: Colors.blueAccent,
              child: Obx(() {
                if (controller.isLoading.value) {
                  return const Center(
                      child: CircularProgressIndicator(color: Colors.blue));
                }
                if (controller.hasConnectionError.value) {
                  return SingleChildScrollView(
                    physics: const AlwaysScrollableScrollPhysics(),
                    child: Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SizedBox(
                            height: MediaQuery.of(context).size.height * 0.3,
                          ),
                          const FaIcon(
                            FontAwesomeIcons.globe, // Mengganti ke ikon yang lebih tepat
                            size: 150,
                            color: Colors.grey,
                          ),
                          const SizedBox(height: 16),
                          Text(
                            'Periksa Koneksi Internet Anda',
                            style: GoogleFonts.poppins(
                              fontSize: 18,
                              fontWeight: FontWeight.w600,
                              color: Colors.grey[800],
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            'Tidak dapat terhubung ke server. Silakan coba lagi.',
                            style: GoogleFonts.poppins(
                              fontSize: 14,
                              color: Colors.grey[600],
                            ),
                            textAlign: TextAlign.center,
                          ),
                          const SizedBox(height: 16),
                          ElevatedButton(
                            onPressed: () {
                              controller.fetchMenu(isRefresh: true);
                            },
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.blueAccent,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8),
                              ),
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 24, vertical: 12),
                            ),
                            child: Text(
                              'Coba Lagi',
                              style: GoogleFonts.poppins(
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }
                if (controller.filteredMenuList.isEmpty) {
                  return SingleChildScrollView(
                    physics: const AlwaysScrollableScrollPhysics(),
                    child: Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SizedBox(
                            height: MediaQuery.of(context).size.height * 0.3,
                          ),
                          Text(
                            'Tidak ada item yang tersedia',
                            style: GoogleFonts.poppins(
                              fontSize: 16,
                              color: Colors.grey,
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }

                return GridView.builder(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    childAspectRatio: 0.6,
                    crossAxisSpacing: 12,
                    mainAxisSpacing: 12,
                  ),
                  itemCount: controller.filteredMenuList.length,
                  itemBuilder: (context, index) {
                    final item = controller.filteredMenuList[index];
                    return GestureDetector(
                      onTap: () {
                        Get.toNamed('/detail', arguments: {'id': item['id']});
                      },
                      child: Card(
                        elevation: 5,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            // Gambar produk dengan rasio 1:1
                            AspectRatio(
                              aspectRatio: 1 / 1,
                              child: ClipRRect(
                                borderRadius: const BorderRadius.vertical(
                                    top: Radius.circular(15)),
                                child: item['image'] != null && item['image'].toString().isNotEmpty
                                    ? Image.network(
                                        item['image'],
                                        fit: BoxFit.cover,
                                        width: double.infinity,
                                        height: double.infinity,
                                        errorBuilder: (context, error, stackTrace) {
                                          return Container(
                                            color: Colors.grey[200],
                                            child: const Center(
                                              child: FaIcon(
                                                FontAwesomeIcons.utensils,
                                                size: 70,
                                                color: Colors.blueAccent,
                                              ),
                                            ),
                                          );
                                        },
                                      )
                                    : Container(
                                        color: Colors.grey[200],
                                        child: const Center(
                                          child: FaIcon(
                                            FontAwesomeIcons.utensils,
                                            size: 70,
                                            color: Colors.blueAccent,
                                          ),
                                        ),
                                      ),
                              ),
                            ),
                            // Konten teks dengan padding yang lebih kompak
                            Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  // Nama produk
                                  Text(
                                    item['name'],
                                    style: GoogleFonts.poppins(
                                      fontWeight: FontWeight.w800,
                                      fontSize: 14,
                                    ),
                                    maxLines: 2,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                  // Harga
                                  Text(
                                    'Rp ${currencyFormat.format(item['price'].toInt())}',
                                    style: GoogleFonts.poppins(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.blueAccent,
                                      fontSize: 14,
                                    ),
                                  ),
                                  // Rating dan jumlah terjual
                                  Row(
                                    children: [
                                      const FaIcon(
                                        FontAwesomeIcons.solidStar,
                                        color: Colors.yellow,
                                        size: 14,
                                      ),
                                      const SizedBox(width: 4),
                                      Text(
                                        '${item['rating']}, ${item['sold']}',
                                        style: GoogleFonts.poppins(fontSize: 12),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 2),
                                  // Kategori
                                  Text(
                                    item['category'],
                                    style: GoogleFonts.poppins(
                                      color: Colors.grey,
                                      fontSize: 10,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                );
              }),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterChip(String category) {
    return Obx(() => FilterChip(
          label: Text(
            category,
            style: GoogleFonts.poppins(
              color: controller.selectedCategory.value == category
                  ? Colors.white
                  : Colors.black,
              fontWeight: FontWeight.w500,
              fontSize: 12,
            ),
          ),
          selected: controller.selectedCategory.value == category,
          onSelected: (bool value) {
            if (value) {
              controller.filterMenu(category: category);
            }
          },
          backgroundColor: Colors.grey[200],
          selectedColor: Colors.blueAccent,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
          elevation: 2,
        ));
  }
}