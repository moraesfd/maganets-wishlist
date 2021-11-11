<template>
  <div class="wishlist">
    <LayoutDefault>
      <ListProducts
        title="Home > Lista de desejos"
        type="wishlist"
        :list="wishlist"
      />
    </LayoutDefault>
  </div>
</template>
<script>
import LayoutDefault from "../layout/LayoutDefault.vue";
import ListProducts from "../components/ListProducts/index.vue";

export default {
  name: "Wishlist",
  components: {
    LayoutDefault,
    ListProducts,
  },
  data() {
    return {
      wishlist: [],
      newProduct: null,
    };
  },
  mounted() {
    if (localStorage.getItem("my-wishlist")) {
      try {
        this.wishlist = JSON.parse(localStorage.getItem("my-wishlist"));
      } catch (e) {
        localStorage.removeItem("my-wishlist");
      }
    }
  },
  methods: {
    addItem(item) {
      if (!item) {
        return;
      }

      this.wishlist.push(item);
      this.saveItems();
    },
    removeItem(item) {
      this.wishlist.splice(item, 1);
      this.saveItems();
    },
    saveItems() {
      const parsed = JSON.stringify(this.wishlist);
      localStorage.setItem("my-wishlist", parsed);
    },
  },
};
</script>
