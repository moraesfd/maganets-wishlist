<template>
  <div v-if="type == 'home'" class="product-toggle-icon on-home">
    <div class="product-toggle-icon__background">
      <img src="@/assets/images/banner-arrow-down.svg" alt="" />
    </div>
    <button
      class="product-toggle-icon__button"
      @click="toggle(product)"
      :class="{ active: currentState }"
    >
      <font-awesome-icon icon="heart" />
    </button>
  </div>
  <div v-else class="product-toggle-icon on-wishlist">
    <button class="product-toggle-icon__button" @click="toggle(product)">
      <font-awesome-icon :icon="['far', 'times-circle']" />
    </button>
  </div>
</template>
<script>
export default {
  name: "ProductToggleIcon",
  props: {
    product: Object,
    defaultState: {
      type: Boolean,
      default: false,
    },
    type: String,
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

  &.on-wishlist {
    @apply relative;

    button {
      @apply left-auto -right-5 top-1;

      svg {
        @apply fill-current text-black;
      }
    }
  }
}
</style>
