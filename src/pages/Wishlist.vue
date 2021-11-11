<template>
  <div class="wishlist">
    <LayoutDefault>
      <ListProducts title="Home > Lista de desejos" :list="products" />
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
      products: [],
      newProduct: null,
    };
  },
  mounted() {
    if (localStorage.getItem("products")) {
      try {
        this.products = JSON.parse(localStorage.getItem("products"));
      } catch (e) {
        localStorage.removeItem("products");
      }
    }
  },
  methods: {
    addProduct() {
      if (!this.newProduct) {
        return;
      }

      this.products.push(this.newProduct);
      this.newProduct = "";
      this.saveProducts();
    },
    removeProduct(x) {
      this.products.splice(x, 1);
      this.saveProducts();
    },
    saveProducts() {
      const parsed = JSON.stringify(this.products);
      localStorage.setItem("products", parsed);
    },
  },
};
</script>
