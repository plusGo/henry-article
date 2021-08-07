export class ValidatorReg {
  static 字母 = /^[a-zA-Z]+$/;
  static 小写字母 = /^[a-z]+$/;
  static 大写字母 = /^[A-Z]+$/;
  static 数字 = /^[0-9]+$/;
  static 下划线 = /^[_-]+$/;
  static 中线 = /^[--]+$/;

  static 邮箱 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  static 中文 = /[\u4E00-\u9FA5]/;

  static 中文_字母_数字_下划线 = /[0-9a-zA-Z\u4E00-\u9FA5_-]+$/;
}

