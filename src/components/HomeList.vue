<template>
  <div class="HomeList">
    <h1 class="HomeList__title">Home</h1>
    <ul class="HomeList__list">
      <li v-for="product of products" :key="product.id">
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
import axios from 'axios'
import CardProduct from './CardProduct.vue'

export default {
  name: 'HomeList',
  components: {
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      const res = await axios.get(
        'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e'
      )

      this.products = res.data.products
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.HomeList {
  @apply container;

  &__list {
    @apply grid gap-4 sm:grid-cols-2 md:grid-cols-4 container mx-auto p-0;
  }
}
</style>