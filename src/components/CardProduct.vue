<template>
  <div class="card-product">
    <img :src="image" alt="" class="card-product__image" />
    <h3 class="card-product__title">{{ title }}</h3>
    <h4 class="card-product__price">{{ price }}</h4>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    title: String,
    image: String,
    price: String
  }
}
</script>

<style lang="scss" scoped>
.card-product {
  @apply border-2 border-purple p-2;
}
</style>