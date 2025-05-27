part of 'app_pages.dart';

abstract class Routes {
  Routes._();

  static const LOGIN = _Paths.LOGIN;
  static const REGISTER = _Paths.REGISTER;
  static const FORGOT_PASSWORD = _Paths.FORGOT_PASSWORD;
  static const MENU = _Paths.MENU;
  static const DETAIL = _Paths.DETAIL;
  static const PROFILE = _Paths.PROFILE;
  static const TRANSACTION = _Paths.TRANSACTION;
}

abstract class _Paths {
  _Paths._();

  static const LOGIN = '/login';
  static const REGISTER = '/register'; // Tambahkan definisi REGISTER
  static const FORGOT_PASSWORD =
      '/forgot-password'; // Tambahkan definisi FORGOT_PASSWORD
  static const MENU = '/menu';
  static const DETAIL = '/detail';
  static const PROFILE = '/profile';
  static const TRANSACTION = '/transaction';
}
