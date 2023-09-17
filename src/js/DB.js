//@ts-check
export default class DB {
  /**
   *
   * @param {String} DBKey
   */
  constructor(DBKey) {
    this.DBName = DBKey;

    if (this.checkDB()) {
      this.createDB();
    }

    this.keyValue = Math.random();
  }

  DBName;
  keyValue; // for ref updates

  checkDB() {
    return localStorage.getItem(this.DBName) === null;
  }

  createDB() {
    localStorage.setItem(this.DBName, JSON.stringify({}));
    return {};
  }

  setDB(value) {
    let dataRaw = JSON.stringify(value);
    localStorage.setItem(this.DBName, dataRaw);
  }

  getAll() {
    let dataRaw = localStorage.getItem(this.DBName);
    if (dataRaw === null) {
      dataRaw = JSON.stringify(this.createDB());
    }

    let data = JSON.parse(dataRaw);
    return data;
  }

  get(key) {
    let data = this.getAll();
    return data[key];
  }
  get list() {
    return this.getAll();
  }

  set(key, value) {
    let data = this.getAll();
    data[key] = value;
    this.setDB(data);

    this.keyValue = Math.random();
  }

  delete(key) {
    let data = this.getAll();
    delete data[key];
    this.setDB(data);

    this.keyValue = Math.random();
  }
}
