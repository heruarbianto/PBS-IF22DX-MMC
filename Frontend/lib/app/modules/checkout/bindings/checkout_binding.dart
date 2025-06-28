import 'package:get/get.dart';
import '../controllers/checkout_controller.dart';

class CheckoutBinding extends Bindings {
  @override
  void dependencies() {
    final args = Get.arguments as Map<String, dynamic>;
    final items = args['items'] as List;
    final selectedItems = args['selectedItems'] as List<Map<String, dynamic>>;

    Get.lazyPut(() => CheckoutController(items, selectedItems: selectedItems));
  }
}
