<template>
  <div class="wishlist">
    <AppLayout>
      <ProductList title="Home > Lista de desejos" type="wishlist" />
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from "../layout/AppLayout.vue";
import ProductList from "../components/product/ProductList.vue";

export default {
  name: "Wishlist",
  components: {
    AppLayout,
    ProductList,
  },
};
</script>
