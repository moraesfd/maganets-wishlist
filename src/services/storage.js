export default {
  setStorage(name, store) {
    localStorage.setItem(name, JSON.stringify(store))
  },

  getStorage(name) {
    let store = localStorage.getItem(name);
    return JSON.parse(store ?? '[]');
  }
}