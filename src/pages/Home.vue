<template>
  <div class="home">
    <LayoutDefault>
      <ListProducts title="Home" type="home" :list="productsOnApi" />
    </LayoutDefault>
  </div>
</template>

<script>
import axios from "axios";
import LayoutDefault from "../layout/LayoutDefault.vue";
import ListProducts from "../components/ListProducts/index.vue";

export default {
  name: "Home",
  components: {
    LayoutDefault,
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
