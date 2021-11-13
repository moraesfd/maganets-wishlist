<template>
  <div class="product-card">
    <div class="box">
      <ProductToggleIcon
        :product="product"
        :default-state="defaultToggleState"
      />
    </div>
    <img :src="product.image" alt="" class="product-card__image" />
    <h3 class="product-card__title">{{ product.title }}</h3>
    <h4 class="product-card__price">R$ {{ product.price }}</h4>
  </div>
</template>

<script>
import ProductToggleIcon from "./ProductToggleIcon.vue";
export default {
  name: "ProductCard",
  components: {
    ProductToggleIcon,
  },
  props: {
    product: Object,
    defaultToggleState: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.product-card {
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
