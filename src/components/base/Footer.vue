<template>
  <footer>
    <div class="footer-container">
      <h1 class="footer-container__info">{{ info }}</h1>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    info: String
  }
}
</script>
<style lang="scss">
footer {
  @apply bg-gray-200 h-20 pt-8;

  .footer-container {
    @apply container;

    &__info {
      @apply text-gray-700 text-center text-sm;
    }
  }
}
</style>