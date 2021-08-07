class StorageProxy {

  constructor(private storage: Storage) {
  }

  getString(key: string): string {
    return this.storage.getItem(key);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  saveString(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  saveObj(key: string, value: [] | { [key: string]: any }): void {
    this.saveString(key, this.serialize(value));
  }

  getObj<T extends ([] | { [key: string]: any })>(key: string): T {
    return this.deSerialize(this.getString(key)) as T;
  }

  private serialize(value: [] | { [key: string]: any }): string {
    return JSON.stringify(value);
  }

  private deSerialize(value: string): [] | { [key: string]: any } {
    return JSON.parse(value);
  }

}

export class StorageService {
  static session(): StorageProxy {
    return new StorageProxy(window.sessionStorage);
  }

  static local(): StorageProxy {
    return new StorageProxy(window.localStorage);
  }

}
