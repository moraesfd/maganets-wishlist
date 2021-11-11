<template>
  <div class="home">
    <AppLayout>
      <ListProducts title="Home" type="home" :list="productsOnApi" />
    </AppLayout>
  </div>
</template>

<script>
import axios from "axios";
import AppLayout from "../layout/AppLayout.vue";
import ListProducts from "../components/ListProducts.vue";

export default {
  name: "Home",
  components: {
    AppLayout,
    ListProducts,
  },
  data() {
    return {
      productsOnApi: [],
      productsOnLocalStorage: [],
      newProductOnLocalStorage: null,
    };
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e"
        );

        this.productsOnApi = res.data.products;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
