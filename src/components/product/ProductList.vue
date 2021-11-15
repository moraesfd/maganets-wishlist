<template>
  <div class="product-list">
    <ul v-if="type == 'home'" class="product-list__list">
      <li v-for="product of resultQueryHome" :key="product.id">
        <ProductCard
          :product="product"
          :default-toggle-state="verifyItemOnWishlist(product.id)"
          :type="type"
        />
      </li>
    </ul>
    <ul
      v-else-if="type == 'wishlist' && wishlist.length"
      class="product-list__list"
    >
      <li v-for="product of resultQueryWishlist" :key="product.id">
        <ProductCard
          :product="product"
          :default-toggle-state="true"
          :type="type"
        />
      </li>
    </ul>
    <ul v-else class="product-list__list"></ul>
  </div>
</template>

<script>
import StorageService from "@/services/storage.js";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  props: {
    type: String,
    list: Array,
  },
  components: {
    ProductCard,
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

    this.$root.$on("updateWishlist", (item) => {
      item.wishlist ? this.addItem(item) : this.removeItem(item.id);
    });
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
        if (this.wishlist.length == 0) {
          this.$root.$emit("emptyWishlist", true);
        }
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
.product-list {
  @apply container;

  &__list {
    @apply grid gap-4 sm:grid-cols-2 md:grid-cols-4 container mx-auto py-8 px-0;
  }
}
</style>
