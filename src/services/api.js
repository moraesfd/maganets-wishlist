import axios from 'axios';

export default {
  baseUrl: "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e",

  getUrl() {
    return this.baseUrl;
  },
  async getData(success, error) {
    await axios.get(this.getUrl()).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  async getProductsFiltered(success, error) {
    await axios.get(this.getUrl()).then(
      (response) => {
        let products = response.data.products
        let filtered = []
        products.filter((product) => {
          let item = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            wishlist: false
          }
          filtered.push(item)
        })
        success(filtered)
      },
      (response) => {
        error(response)
      })
  },
}