<template>
  <div class="toggle-icon">
    <div class="toggle-icon__background">
      <img src="@/assets/images/banner-arrow-down.svg" alt="" />
    </div>
    <button
      class="toggle-icon__button"
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
  name: "ToggleIcon",
  props: {
    defaultState: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
    },
  },
  data() {
    return {
      currentState: this.defaultState,
    };
  },
  methods: {
    toggle(item) {
      this.currentState = !this.currentState;
      this.$root.$emit("updateWishlist", {
        item: item,
        status: this.currentState,
      });
    },
  },
};
</script>
<style lang="scss">
.toggle-icon {
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
