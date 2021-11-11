<template>
  <div class="list-products">
    <h1 class="list-products__title">{{ title }}</h1>
    <ul v-if="type == 'home'" class="list-products__list">
      <li v-for="product of resultQuery" :key="product.id">
        <card-product :product="product" />
      </li>
    </ul>
    <ul v-else-if="type == 'wishlist'" class="list-products__list">
      <li
        v-for="product of wishlist"
        :key="product.id"
        @updateAllWishlist="updateWishlist(product)"
      >
        <card-product :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardProduct from "./CardProduct.vue";

export default {
  name: "HomeList",
  props: {
    title: String,
    type: String,
    list: Array,
  },
  data() {
    return {
      searchQuery: null,
      wishlist: [],
    };
  },
  mounted() {
    this.$root.$on("sendQuery", (data) => {
      this.searchQuery = data;
    });
  },
  components: {
    CardProduct,
  },
  methods: {
    updateWishlist(product) {
      this.wishlist.push(product);
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.list.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.list;
      }
    },
  },
};
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
