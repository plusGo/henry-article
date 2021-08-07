import {Md5} from "ts-md5/dist/md5";

export class PasswordService {
  static encrypt(value: string): string {
    return Md5.hashStr(value).toString();
  }
}
