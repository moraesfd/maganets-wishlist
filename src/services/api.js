import axios from 'axios';

export default {
  baseUrl: "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e",

  getUrl() {
    return this.baseUrl;
  },

  handleErrors(err) {
    console.log({ message: "Errors is handled here", err });
  },

  async getData() {
    try {
      return await axios.get(this.getUrl())
        .then(response => {
          return response.data;
        })
    } catch (err) {
      this.handleErrors(err);
    }
  }
}