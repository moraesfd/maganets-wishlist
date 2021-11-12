<template>
  <div class="home">
    <AppLayout>
      <ListProducts title="Home" type="home" :list="productsOnApi" />
    </AppLayout>
  </div>
</template>

<script>
import ApiService from "../services/api.js";
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
    getDataFromApi() {
      ApiService.getData((data) => {
        this.productsOnApi = data.products;
      });
    },
  },
};
</script>
