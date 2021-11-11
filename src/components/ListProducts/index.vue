<template>
  <div class="list-products">
    <h1 class="list-products__title">{{ title }}</h1>
    <ul class="list-products__list">
      <li v-for="product of list" :key="product.id">
        <card-product
          :image="product.image"
          :title="product.title"
          :price="product.price"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import CardProduct from '../ListProducts/CardProduct.vue'

export default {
  name: 'HomeList',
  props: {
    title: String,
    list: Array
  },
  components: {
    CardProduct
  }
}
</script>

<style lang="scss" scoped>
.list-products {
  @apply container;

  &__title {
    @apply font-black pt-6;
  }

  &__list {
    @apply grid gap-4 sm:grid-cols-2 md:grid-cols-4 container mx-auto py-8 px-0;
  }
}
</style>