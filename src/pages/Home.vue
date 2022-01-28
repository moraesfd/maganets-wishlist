<template>
  <div class="home">
    <AppLayout>
      <Breadcrumb type="home" />
      <ProductList type="home" :list="productsOnApi" />
    </AppLayout>
  </div>
</template>

<script>
import ApiService from "../services/api.js";
import AppLayout from "../layout/AppLayout.vue";
import ProductList from "../components/product/ProductList.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: "MagaNets - Home",
      meta: [
        {
          name: "description",
          content:
            "Teste para demonstrar os conhecimentos em Front-End",
        },
        {
          property: "og:title",
          content: "MagaNets - Home",
        },
        { property: "og:site_name", content: "MagaNets" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  components: {
    AppLayout,
    ProductList,
    Breadcrumb,
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
