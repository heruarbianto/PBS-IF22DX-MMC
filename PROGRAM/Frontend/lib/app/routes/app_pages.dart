import 'package:get/get.dart';

import '../modules/menu/bindings/menu_binding.dart';
import '../modules/menu/views/menu_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.MENU;

  static final routes = [
    GetPage(
      name: _Paths.MENU,
      page: () =>  MenuView(),
      binding: MenuBinding(),
    ),
  ];
}
