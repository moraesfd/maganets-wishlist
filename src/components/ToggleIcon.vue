<template>
  <div class="toggle-icon">
    <button
      class="toggle-icon__button"
      @click="toggle(product)"
      :class="{ active: currentState }"
    >
      <font-awesome-icon v-if="currentState" :icon="['fas', 'heart']" />
      <font-awesome-icon v-else :icon="['far', 'heart']" />
    </button>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

library.add(fasHeart, farHeart);

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
  &__button {
    &.active {
      svg {
        @apply fill-current text-red-600;
      }
    }
  }
}
</style>
