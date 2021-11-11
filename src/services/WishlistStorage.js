export default class WishlistStorage {
  wishlist = []
  name = 'my-wishlist'

  addItem(item) {
    if (!item) {
      return;
    }

    this.wishlist.push(item);
    this.saveItems();
  }

  removeItem(item) {
    this.wishlist.splice(item, 1);
    this.saveItems();
  }

  saveItems() {
    const parsed = JSON.stringify(this.wishlist);
    localStorage.setItem(this.name, parsed);
  }
}