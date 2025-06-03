import 'package:get/get.dart';
import 'package:pbs_mmc_tukoyo/app/modules/chart/controllers/chart_controller.dart';

import '../controllers/detail_controller.dart';

class DetailBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<DetailController>(
      () => DetailController(),
    );
     Get.lazyPut<ChartController>(
      () => ChartController(),
    );
  }
}
