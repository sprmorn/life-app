// ==================== IndexedDB Database Layer ====================
const DB_NAME = 'LifeAppDB';
const DB_VERSION = 1;

class LifeDB {
  constructor() {
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('accounting')) {
          const store = db.createObjectStore('accounting', { keyPath: 'id', autoIncrement: true });
          store.createIndex('date', 'date');
          store.createIndex('yearMonth', 'yearMonth');
        }
        if (!db.objectStoreNames.contains('todos')) {
          const store = db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
          store.createIndex('type', 'type');
          store.createIndex('isCompleted', 'isCompleted');
        }
        if (!db.objectStoreNames.contains('schedule')) {
          const store = db.createObjectStore('schedule', { keyPath: 'id', autoIncrement: true });
          store.createIndex('dayOfWeek', 'dayOfWeek');
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }
      };
      req.onsuccess = (e) => { this.db = e.target.result; resolve(); };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  _tx(storeName, mode = 'readonly') {
    return this.db.transaction(storeName, mode).objectStore(storeName);
  }

  _req(req) {
    return new Promise((resolve, reject) => {
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  // ---- Accounting ----
  async addRecord(record) {
    record.yearMonth = `${new Date(record.date).getFullYear()}-${String(new Date(record.date).getMonth()).padStart(2,'0')}`;
    return this._req(this._tx('accounting', 'readwrite').put(record));
  }
  async deleteRecord(id) { return this._req(this._tx('accounting', 'readwrite').delete(id)); }
  async getRecord(id) { return this._req(this._tx('accounting').get(id)); }
  async getAllRecords() { return this._req(this._tx('accounting').getAll()); }
  async getRecordsByMonth(year, month) {
    const ym = `${year}-${String(month).padStart(2,'0')}`;
    const all = await this.getAllRecords();
    return all.filter(r => r.yearMonth === ym);
  }

  // ---- Todos ----
  async addTodo(todo) { return this._req(this._tx('todos', 'readwrite').put(todo)); }
  async deleteTodo(id) { return this._req(this._tx('todos', 'readwrite').delete(id)); }
  async getTodo(id) { return this._req(this._tx('todos').get(id)); }
  async getAllTodos() { return this._req(this._tx('todos').getAll()); }
  async getTodosByType(type) {
    const all = await this.getAllTodos();
    return all.filter(t => t.type === type);
  }

  // ---- Schedule ----
  async addSchedule(item) { return this._req(this._tx('schedule', 'readwrite').put(item)); }
  async deleteSchedule(id) { return this._req(this._tx('schedule', 'readwrite').delete(id)); }
  async getAllSchedule() { return this._req(this._tx('schedule').getAll()); }

  // ---- Settings ----
  async getSetting(key) {
    const r = await this._req(this._tx('settings').get(key));
    return r ? r.value : null;
  }
  async setSetting(key, value) {
    return this._req(this._tx('settings', 'readwrite').put({ key, value }));
  }

  // ---- Export / Import ----
  async exportAll() {
    return {
      accounting: await this.getAllRecords(),
      todos: await this.getAllTodos(),
      schedule: await this.getAllSchedule(),
      settings: await this._req(this._tx('settings').getAll()),
      exportedAt: new Date().toISOString(),
      version: DB_VERSION,
    };
  }

  async importAll(data) {
    // Clear all stores first
    for (const name of ['accounting', 'todos', 'schedule', 'settings']) {
      await this._req(this._tx(name, 'readwrite').clear());
    }
    // Import
    if (data.accounting) for (const r of data.accounting) await this.addRecord(r);
    if (data.todos) for (const t of data.todos) await this.addTodo(t);
    if (data.schedule) for (const s of data.schedule) await this.addSchedule(s);
    if (data.settings) for (const s of data.settings) await this.setSetting(s.key, s.value);
  }
}

const db = new LifeDB();
