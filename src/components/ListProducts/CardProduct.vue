<template>
  <div class="card-product">
    <img :src="image" alt="" class="card-product__image" />
    <h3 class="card-product__title">{{ title }}</h3>
    <h4 class="card-product__price">R$ {{ price }}</h4>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    title: String,
    image: String,
    price: String,
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
