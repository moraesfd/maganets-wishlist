<template>
  <header>
    <div class="header-container">
      <h1 class="header-container__company">{{ company }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    company: String
  }
}
</script>
<style lang="scss">
header {
  @apply bg-purple h-32 pt-8;

  .header-container {
    @apply container;

    &__company {
      @apply text-white font-black text-lg;
    }
  }
}
</style>