<template>
  <div class="list-products">
    <h1 class="list-products__title">{{ title }}</h1>
    <ul v-if="type == 'home'" class="list-products__list">
      <li v-for="product of resultQueryHome" :key="product.id">
        <card-product
          :product="product"
          :default-toggle-state="verifyItemOnWishlist(product.id)"
        />
      </li>
    </ul>
    <ul v-else-if="type == 'wishlist'" class="list-products__list">
      <li
        v-for="(product, index) of resultQueryWishlist"
        :key="index"
        @updateAllWishlist="updateWishlist(product)"
      >
        <card-product :product="product" :default-toggle-state="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import StorageService from "../services/storage.js";
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
      nameLocalStorage: "my-wishlist",
    };
  },
  mounted() {
    this.wishlist = StorageService.getStorage(this.nameLocalStorage);

    this.$root.$on("sendQuery", (data) => {
      this.searchQuery = data;
    });

    this.$root.$on("updateWishlist", ({ item, status }) => {
      if (status) {
        this.addItem(item);
      } else {
        this.removeItem(item.id);
      }
    });
  },
  components: {
    CardProduct,
  },
  methods: {
    addItem(item) {
      this.wishlist = [...this.wishlist, item];
    },
    removeItem(id) {
      this.wishlist = this.wishlist.filter((item) => item.id !== id);
    },
    verifyItemOnWishlist(id) {
      return this.wishlist.filter((item) => item.id === id).length > 0;
    },
  },
  watch: {
    wishlist: {
      handler() {
        StorageService.setStorage(this.nameLocalStorage, this.wishlist);
      },
    },
  },
  computed: {
    resultQueryHome() {
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
    resultQueryWishlist() {
      if (this.searchQuery) {
        return this.wishlist.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.wishlist;
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
