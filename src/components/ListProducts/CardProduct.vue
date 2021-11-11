<template>
  <div class="card-product">
    <div class="box">
      <ToggleIcon @updateProduct="addToWishlist(product)" :product="product" />
      <h5>{{ product.id }}</h5>
    </div>
    <img :src="product.image" alt="" class="card-product__image" />
    <h3 class="card-product__title">{{ product.title }}</h3>
    <h4 class="card-product__price">R$ {{ product.price }}</h4>
  </div>
</template>

<script>
import ToggleIcon from "./ToggleIcon.vue";
export default {
  name: "CardProduct",
  components: {
    ToggleIcon,
  },
  props: ["product"],
  methods: {
    addToWishlist(product) {
      this.$emit("updateAllWishlist", product);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-product {
  @apply border border-gray-300 shadow-md px-4 py-2 h-full;

  &__image {
    @apply w-full w-32 m-auto py-2;
  }

  &__title {
    @apply font-bold text-gray-700 text-sm text-center;
  }

  &__price {
    @apply font-bold text-yellow-400 text-sm text-center py-6;
  }
}
</style>
