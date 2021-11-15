<template>
  <div class="empty-state">
    <p class="empty-state__msg">
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: "EmptyState",
  props: {
    msg: String,
  },
};
</script>
<style lang="scss">
.empty-state {
  @apply container mx-auto py-16 px-0 relative min-h-screen;

  &__msg {
    @apply text-center font-black h-full text-purple;
  }
}
</style>
