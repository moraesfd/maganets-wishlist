<template>
  <div class="home">
    <AppLayout>
      <ProductList title="Home" type="home" :list="productsOnApi" />
    </AppLayout>
  </div>
</template>

<script>
import ApiService from "../services/api.js";
import AppLayout from "../layout/AppLayout.vue";
import ProductList from "../components/product/ProductList.vue";

export default {
  name: "Home",
  components: {
    AppLayout,
    ProductList,
  },
  data() {
    return {
      productsOnApi: [],
    };
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi() {
      ApiService.getProductsFiltered((data) => {
        this.productsOnApi = data;
      });
    },
  },
};
</script>
