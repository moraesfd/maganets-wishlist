<template>
  <section class="base-layout">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.base-layout {
  @apply grid gap-4 sm:grid-cols-2 md:grid-cols-3 container mx-auto;
}
</style>