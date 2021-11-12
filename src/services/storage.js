export default {
  storage: [],
  name: 'my-wishlist',

  getStorage() {
    this.setStorage()
    return this.storage
  },

  setStorage() {
    let store = localStorage.getItem(this.name);
    this.storage = JSON.parse(store ?? '[]');
  },

  addItem(item) {
    if (!item) {
      return;
    }

    this.storage.push(item);
    this.saveItems();
  },

  removeItem(item) {
    this.storage.splice(item, 1);
    this.saveItems();
  },

  saveItems() {
    const parsed = JSON.stringify(this.storage);
    localStorage.setItem(this.name, parsed);
  }
}