<template>
  <div class="product-toggle-icon">
    <div class="product-toggle-icon__background">
      <img src="@/assets/images/banner-arrow-down.svg" alt="" />
    </div>
    <button
      class="product-toggle-icon__button"
      @click="toggle(product)"
      :class="{ active: currentState }"
    >
      <font-awesome-icon :icon="['fas', 'heart']" />
    </button>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

library.add(fasHeart);

export default {
  name: "ProductToggleIcon",
  props: {
    product: Object,
    defaultState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentState: this.defaultState,
    };
  },
  methods: {
    toggle(product) {
      this.currentState = !this.currentState;
      let item = product;
      item.wishlist = this.currentState;
      this.$root.$emit("updateWishlist", item);
    },
  },
};
</script>
<style lang="scss">
.product-toggle-icon {
  @apply relative -left-2 h-2 -top-2.5;

  &__background {
    @apply w-12 absolute z-0 -left-4;

    img {
      @apply w-full object-cover object-bottom h-8;
    }
  }
  &__button {
    @apply absolute z-50 w-4 h-4 top-1;

    svg {
      @apply fill-current text-white;
    }

    &.active {
      svg {
        @apply fill-current text-red-600;
      }
    }
  }
}
</style>
