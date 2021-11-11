<template>
  <div class="toggle-icon">
    <button
      class="toggle-icon__button"
      @click="toggle(product)"
      :class="{ active: isActive }"
    >
      <font-awesome-icon v-if="isActive" :icon="['fas', 'heart']" />
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
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle(product) {
      this.isActive = !this.isActive;
      this.$emit("updateProduct", product);
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
