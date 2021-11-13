<template>
  <header>
    <div class="header-container">
      <router-link to="/" class="header-container__company">
        {{ company }}
      </router-link>
      <div class="header-container__menu">
        <HeaderMenu />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";
export default {
  name: "Header",
  props: {
    company: String,
  },
  components: {
    HeaderMenu,
  },
};
</script>
<style lang="scss">
header {
  @apply bg-purple h-full py-2;
  @apply md:pt-8;

  .header-container {
    @apply container flex flex-auto flex-wrap;
    @apply md:flex-nowrap md:gap-16;

    &__company {
      @apply text-white text-center font-black text-3xl m-auto py-4;
      @apply md:text-left md:flex-initial md:text-lg md:m-0;
    }

    &__menu {
      @apply w-full flex-initial;
    }
  }
}
</style>
