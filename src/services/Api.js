import axios from 'axios';

export default class Api {
  async getDataFromApi() {
    try {
      const res = await axios.get(
        "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
      );
      return res.data.products;
    } catch (e) {
      console.error(e);
    }
  }
}