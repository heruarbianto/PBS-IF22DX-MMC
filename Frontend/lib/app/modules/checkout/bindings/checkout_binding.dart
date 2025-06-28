import 'package:get/get.dart';
import '../controllers/checkout_controller.dart';

class CheckoutBinding extends Bindings {
  final List<Map<String, dynamic>> items;

  CheckoutBinding(this.items);

  @override
  void dependencies() {
    Get.lazyPut(() => CheckoutController(selectedItems: items));
  }
}
