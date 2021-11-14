<template>
  <div class="wishlist">
    <AppLayout>
      <Breadcrumb type="wishlist" />
      <ProductList type="wishlist" />
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from "../layout/AppLayout.vue";
import ProductList from "../components/product/ProductList.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";

export default {
  name: "Wishlist",
  metaInfo() {
    return {
      title: "MagaNets - Wishlist",
      meta: [
        {
          name: "description",
          content:
            "Teste de desenvolvimento Front-End realizado para a vaga no Luizalabs",
        },
        {
          property: "og:title",
          content: "MagaNets - Wishlist",
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
};
</script>
