import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart'; 

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Makanan & Minuman',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: GoogleFonts.poppinsTextTheme(),
      ),
      home: FoodDrinkPage(),
    );
  }
}

class FoodDrinkPage extends StatefulWidget {
  @override
  _FoodDrinkPageState createState() => _FoodDrinkPageState();
}

class _FoodDrinkPageState extends State<FoodDrinkPage> {
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = '';
  String _selectedCategory = 'All';
  List<Map<String, dynamic>> _allItems = [];
  List<Map<String, dynamic>> _filteredItems = [];

// Format angka dengan pemisah ribuan
  final NumberFormat _currencyFormat = NumberFormat('#,###', 'id_ID');
  
  // Fungsi untuk mengambil data dari API
  Future<List<Map<String, dynamic>>> fetchItems() async {
    final response = await http.get(Uri.parse('http://192.168.18.8:1220/api/menu'));
    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body);
      if (jsonData['metadata']['error'] == 0) {
        List<dynamic> data = jsonData['dataUser'];
        return data.map((item) {
          return {
            'id': item['id'],
            'name': item['nama'],
            'price': item['harga'],
            'rating': 4.5, // Rating dummy karena tidak ada di JSON
            'sold': '50+ terjual', // Jumlah terjual dummy karena tidak ada di JSON
            'image': 'http://localhost:1220${item['gambar_menu']}', // Menambahkan base URL untuk gambar
            'category': item['kategori'],
            'availability': item['ketersediaan'],
          };
        }).toList();
      } else {
        throw Exception('API error: ${jsonData['metadata']['message']}');
      }
    } else {
      throw Exception('Failed to load items');
    }
  }

  // Fungsi untuk memfilter item berdasarkan pencarian, kategori, dan ketersediaan
  void _filterItems() {
    setState(() {
      _filteredItems = _allItems.where((item) {
        bool matchesSearch = item['name']
            .toString()
            .toLowerCase()
            .contains(_searchQuery.toLowerCase());
        bool matchesCategory = _selectedCategory == 'All' ||
            item['category'] == _selectedCategory;
        bool isAvailable = item['availability'] == 'READY'; // Hanya menampilkan item yang READY
        return matchesSearch && matchesCategory && isAvailable;
      }).toList();
    });
  }

  @override
  void initState() {
    super.initState();
    _searchController.addListener(() {
      setState(() {
        _searchQuery = _searchController.text;
        _filterItems();
      });
    });
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
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
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.blue, Colors.blueAccent],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.shopping_cart, color: Colors.white),
            onPressed: () {},
          ),
        ],
      ),
      body: Column(
        children: [
          // Search bar
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Cari makanan atau minuman...',
                prefixIcon: Icon(Icons.search, color: Colors.blue),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30),
                  borderSide: BorderSide.none,
                ),
                filled: true,
                fillColor: Colors.grey[100],
                contentPadding: EdgeInsets.symmetric(vertical: 0),
                hintStyle: TextStyle(color: Colors.grey),
              ),
            ),
          ),
          // Filter bar
          Container(
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
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
            child: FutureBuilder<List<Map<String, dynamic>>>(
              future: fetchItems(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator(color: Colors.blue));
                } else if (snapshot.hasError) {
                  return Center(child: Text('Error: ${snapshot.error}', style: TextStyle(color: Colors.red)));
                } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
                  return Center(child: Text('No items found', style: TextStyle(color: Colors.grey)));
                }

                _allItems = snapshot.data!;
                if (_filteredItems.isEmpty && _searchQuery.isEmpty) {
                  _filteredItems = _allItems.where((item) => item['availability'] == 'READY').toList();
                }

                return GridView.builder(
                  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    childAspectRatio: 0.75,
                    crossAxisSpacing: 12,
                    mainAxisSpacing: 12,
                  ),
                  itemCount: _filteredItems.length,
                  itemBuilder: (context, index) {
                    final item = _filteredItems[index];
                    return AnimatedScale(
                      scale: 1.0,
                      duration: Duration(milliseconds: 300),
                      child: Card(
                        elevation: 5,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            // Gambar produk
                            Expanded(
                              child: ClipRRect(
                                borderRadius: BorderRadius.vertical(top: Radius.circular(15)),
                                child: Image.network(
                                  item['image'],
                                  fit: BoxFit.cover,
                                  width: double.infinity,
                                  errorBuilder: (context, error, stackTrace) {
                                    return Container(
                                      color: Colors.grey[300],
                                      child: Icon(Icons.broken_image, size: 50, color: Colors.grey),
                                    );
                                  },
                                ),
                              ),
                            ),
                            Padding(
                              padding: EdgeInsets.all(10),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  // Nama produk
                                  Text(
                                    item['name'],
                                    style: GoogleFonts.poppins(
                                      fontWeight: FontWeight.w600,
                                      fontSize: 12,
                                    ),
                                    maxLines: 2,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                  SizedBox(height: 6),
                                  // Harga dan diskon
                                  Row(
                                    children: [
                                      Text(
                                        'Rp. ${_currencyFormat.format(item['price'].toInt())}',
                                        style: GoogleFonts.poppins(
                                          fontWeight: FontWeight.bold,
                                          color: Colors.blueAccent,
                                          fontSize: 14,
                                        ),
                                      ),
                                  //     SizedBox(width: 8),
                                  //     Text(
                                  //       'Rp${item['price'].toInt()}',
                                  //       style: GoogleFonts.poppins(
                                  //         decoration: TextDecoration.lineThrough,
                                  //         color: Colors.grey,
                                  //         fontSize: 14,
                                  //       ),
                                  //     ),
                                    ],
                                  ),
                                  SizedBox(height: 6),
                                  // // Label diskon
                                  // Container(
                                  //   padding: EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                                  //   decoration: BoxDecoration(
                                  //     color: Colors.blue[50],
                                  //     borderRadius: BorderRadius.circular(10),
                                  //   ),
                                  //   child: Text(
                                  //     'Diskon ${(100 - (item['discountPrice'] / item['price'] * 100)).toInt()}%',
                                  //     style: GoogleFonts.poppins(
                                  //       color: Colors.blueAccent,
                                  //       fontSize: 10,
                                  //     ),
                                  //   ),
                                  // ),
                                  // SizedBox(height: 6),
                                  // Rating dan lokasi
                                  Row(
                                    children: [
                                      Icon(Icons.star, color: Colors.yellow[700], size: 16),
                                      SizedBox(width: 4),
                                      Text(
                                        '${item['rating']}, ${item['sold']}',
                                        style: GoogleFonts.poppins(fontSize: 12),
                                      ),
                                    ],
                                  ),
                                  SizedBox(height: 4),
                                  Text(
                                    item['category'],
                                    style: GoogleFonts.poppins(
                                      color: Colors.grey,
                                      fontSize: 11,
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
              },
            ),
          ),
        ],
      ),
    );
  }

  // Widget untuk filter chip dengan desain modern
  Widget _buildFilterChip(String category) {
    return FilterChip(
      label: Text(
        category,
        style: GoogleFonts.poppins(
          color: _selectedCategory == category ? Colors.white : Colors.black,
          fontWeight: FontWeight.w500,
        ),
      ),
      selected: _selectedCategory == category,
      onSelected: (bool value) {
        if (value) {
          setState(() {
            _selectedCategory = category;
            _filterItems();
          });
        }
      },
      backgroundColor: Colors.grey[200],
      selectedColor: Colors.blueAccent,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20),
      ),
      padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      elevation: 2,
    );
  }
}