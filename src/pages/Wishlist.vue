<template>
  <div class="wishlist">
    <AppLayout>
      <Breadcrumb type="wishlist" />
      <ProductList v-if="!emptyWishlist" type="wishlist" />
      <EmptyState v-else msg="Ops! Sua lista de desejos está vazia." />
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from "../layout/AppLayout.vue";
import ProductList from "../components/product/ProductList.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
import EmptyState from "../components/common/EmptyState.vue";

export default {
  name: "Wishlist",
  data() {
    return {
      emptyWishlist: false,
    };
  },
  mounted() {
    this.$root.$on("emptyWishlist", (status) => {
      this.emptyWishlist = status;
    });
  },
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
    EmptyState,
  },
};
</script>
