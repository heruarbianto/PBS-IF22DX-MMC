import 'package:flutter/material.dart' hide MenuController;
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../controllers/menu_controller.dart';
import '../../profile/views/profile_view.dart';
import '../../transaction/views/transaction_view.dart';
import '../../transaction/bindings/transaction_binding.dart';
import '../../profile/bindings/profile_binding.dart';

class MenuView extends GetView<MenusController> {
  const MenuView({super.key});

  @override
  Widget build(BuildContext context) {
    ProfileBinding().dependencies();
    TransactionBinding().dependencies();
    final NumberFormat currencyFormat = NumberFormat('#,###', 'id_ID');
    final TextEditingController searchController = TextEditingController();

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Makanan & Minuman',
          style: GoogleFonts.poppins(
            fontWeight: FontWeight.bold,
            color: Colors.white,
            fontSize: MediaQuery.of(context).size.width < 600 ? 18 : 20,
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
            icon: FaIcon(
              FontAwesomeIcons.cartShopping,
              color: Colors.white,
              size: MediaQuery.of(context).size.width < 600 ? 22 : 24,
            ),
            onPressed: () {
              controller.onCartClicked();
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // Search bar dan filter hanya ditampilkan di tab Home
          Obx(() => controller.selectedIndex.value == 0
              ? Column(
                  children: [
                    // Search bar
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 16, vertical: 8),
                      child: TextField(
                        controller: searchController,
                        decoration: InputDecoration(
                          hintText: 'Cari makanan atau minuman...',
                          prefixIcon: Icon(
                            Icons.search,
                            color: Colors.blue,
                            size: MediaQuery.of(context).size.width < 600
                                ? 22
                                : 24,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(30),
                            borderSide: BorderSide.none,
                          ),
                          filled: true,
                          fillColor: Colors.grey[100],
                          contentPadding:
                              const EdgeInsets.symmetric(vertical: 0),
                          hintStyle: GoogleFonts.poppins(
                            color: Colors.grey,
                            fontSize: MediaQuery.of(context).size.width < 600
                                ? 14
                                : 16,
                          ),
                        ),
                        onChanged: (value) {
                          controller.filterMenu(searchQuery: value);
                        },
                      ),
                    ),
                    // Filter bar
                    Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 16, vertical: 4),
                      child: LayoutBuilder(
                        builder: (context, constraints) {
                          return Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              _buildFilterChip('All', constraints.maxWidth),
                              _buildFilterChip('MAKANAN', constraints.maxWidth),
                              _buildFilterChip('MINUMAN', constraints.maxWidth),
                            ],
                          );
                        },
                      ),
                    ),
                  ],
                )
              : const SizedBox.shrink()),
          // Konten utama berdasarkan tab
          Expanded(
            child: RefreshIndicator(
              onRefresh: () async {
                await controller.fetchMenu(isRefresh: true);
              },
              color: Colors.blueAccent,
              child: Obx(() {
                switch (controller.selectedIndex.value) {
                  case 0:
                    return _buildHomeTab(context, currencyFormat);
                  case 1:
                    return const TransactionView();
                  case 2:
                    return const ProfileView();
                  default:
                    return _buildHomeTab(context, currencyFormat);
                }
              }),
            ),
          ),
        ],
      ),
      bottomNavigationBar: Obx(() => BottomNavigationBar(
            currentIndex: controller.selectedIndex.value,
            onTap: (index) {
              controller.changeTabIndex(index);
            },
            selectedItemColor: Colors.blueAccent,
            unselectedItemColor: Colors.grey,
            showUnselectedLabels: true,
            selectedLabelStyle: GoogleFonts.poppins(
              fontSize: MediaQuery.of(context).size.width < 600 ? 12 : 14,
            ),
            unselectedLabelStyle: GoogleFonts.poppins(
              fontSize: MediaQuery.of(context).size.width < 600 ? 10 : 12,
            ),
            items: [
              BottomNavigationBarItem(
                icon: Icon(
                  Icons.home,
                  size: MediaQuery.of(context).size.width < 600 ? 24 : 28,
                ),
                label: 'Home',
              ),
              BottomNavigationBarItem(
                icon: Icon(
                  Icons.receipt,
                  size: MediaQuery.of(context).size.width < 600 ? 24 : 28,
                ),
                label: 'Transaction',
              ),
              BottomNavigationBarItem(
                icon: Icon(
                  Icons.person,
                  size: MediaQuery.of(context).size.width < 600 ? 24 : 28,
                ),
                label: 'Profile',
              ),
            ],
          )),
    );
  }

  Widget _buildHomeTab(BuildContext context, NumberFormat currencyFormat) {
    if (controller.isLoading.value) {
      return const Center(child: CircularProgressIndicator(color: Colors.blue));
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
              FaIcon(
                FontAwesomeIcons.globe,
                size: MediaQuery.of(context).size.width < 600 ? 120 : 150,
                color: Colors.grey,
              ),
              const SizedBox(height: 16),
              Text(
                'Periksa Koneksi Internet Anda',
                style: GoogleFonts.poppins(
                  fontSize: MediaQuery.of(context).size.width < 600 ? 16 : 18,
                  fontWeight: FontWeight.w600,
                  color: Colors.grey,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                'Tidak dapat terhubung ke server. Silakan coba lagi.',
                style: GoogleFonts.poppins(
                  fontSize: MediaQuery.of(context).size.width < 600 ? 12 : 14,
                  color: Colors.grey,
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
                  padding:
                      const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                ),
                child: Text(
                  'Coba Lagi',
                  style: GoogleFonts.poppins(
                    fontSize: MediaQuery.of(context).size.width < 600 ? 12 : 14,
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
                  fontSize: MediaQuery.of(context).size.width < 600 ? 14 : 16,
                  color: Colors.grey,
                ),
              ),
            ],
          ),
        ),
      );
    }

    return LayoutBuilder(
      builder: (context, constraints) {
        // Tentukan jumlah kolom dan properti lain berdasarkan lebar layar
        int crossAxisCount;
        double childAspectRatio;
        double fontSize;
        double iconSize;

        if (constraints.maxWidth < 600) {
          // Mobile: 2 kolom
          crossAxisCount = 2;
          childAspectRatio = 0.65; // Lebih tinggi agar muat isi
          fontSize = 12;
          iconSize = 50;
        } else if (constraints.maxWidth < 900) {
          // Tablet kecil: 3 kolom
          crossAxisCount = 3;
          childAspectRatio = 0.65;
          fontSize = 13;
          iconSize = 60;
        } else if (constraints.maxWidth < 1200) {
          // Tablet besar/Desktop kecil: 4 kolom
          crossAxisCount = 4;
          childAspectRatio = 0.65;
          fontSize = 14;
          iconSize = 70;
        } else if (constraints.maxWidth < 1600) {
          // Desktop sedang: 6 kolom
          crossAxisCount = 6;
          childAspectRatio = 0.65;
          fontSize = 14;
          iconSize = 80;
        } else {
          // Desktop besar: 8 kolom
          crossAxisCount = 8;
          childAspectRatio = 0.65;
          fontSize = 14;
          iconSize = 90;
        }

        return GridView.builder(
          padding: EdgeInsets.symmetric(
            horizontal: constraints.maxWidth < 600 ? 16 : 24,
            vertical: 8,
          ),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: crossAxisCount,
            childAspectRatio: childAspectRatio,
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
                    AspectRatio(
                      aspectRatio: 1 / 1,
                      child: ClipRRect(
                        borderRadius: const BorderRadius.vertical(
                            top: Radius.circular(15)),
                        child: item['image'] != null &&
                                item['image'].toString().isNotEmpty
                            ? Image.network(
                                item['image'],
                                fit: BoxFit.cover,
                                width: double.infinity,
                                height: double.infinity,
                                errorBuilder: (context, error, stackTrace) {
                                  return Container(
                                    color: Colors.grey[200],
                                    child: Center(
                                      child: FaIcon(
                                        FontAwesomeIcons.utensils,
                                        size: iconSize,
                                        color: Colors.blueAccent,
                                      ),
                                    ),
                                  );
                                },
                              )
                            : Container(
                                color: Colors.grey[200],
                                child: Center(
                                  child: FaIcon(
                                    FontAwesomeIcons.utensils,
                                    size: iconSize,
                                    color: Colors.blueAccent,
                                  ),
                                ),
                              ),
                      ),
                    ),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 4),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              item['name'],
                              style: GoogleFonts.poppins(
                                fontWeight: FontWeight.w800,
                                fontSize: fontSize,
                              ),
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                            ),
                            Text(
                              'Rp ${currencyFormat.format(item['price'].toInt())}',
                              style: GoogleFonts.poppins(
                                fontWeight: FontWeight.bold,
                                color: Colors.blueAccent,
                                fontSize: fontSize,
                              ),
                            ),
                            Row(
                              children: [
                                FaIcon(
                                  FontAwesomeIcons.solidStar,
                                  color: Colors.yellow,
                                  size: fontSize - 2,
                                ),
                                const SizedBox(width: 4),
                                Text(
                                  '${item['rating']}, ${item['sold']}',
                                  style: GoogleFonts.poppins(
                                      fontSize: fontSize - 2),
                                ),
                              ],
                            ),
                            const SizedBox(height: 2),
                            Text(
                              item['category'],
                              style: GoogleFonts.poppins(
                                color: Colors.grey,
                                fontSize: fontSize - 4,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
  }

  Widget _buildFilterChip(String category, double maxWidth) {
    return Obx(() => FilterChip(
          label: Text(
            category,
            style: GoogleFonts.poppins(
              color: controller.selectedCategory.value == category
                  ? Colors.white
                  : Colors.black,
              fontWeight: FontWeight.w500,
              fontSize: maxWidth < 600 ? 10 : 12,
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
