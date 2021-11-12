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
  }
}