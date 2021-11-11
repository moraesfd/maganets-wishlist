<template>
  <ul class="links">
    <li v-for="(link, index) of links" :key="index" class="links__item">
      <router-link :to="link.url">
        <font-awesome-icon v-if="link.icon != 'heart'" :icon="link.icon" />
        <font-awesome-icon v-else :icon="['fas', link.icon]" />
        <span>{{ link.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Links",
  data() {
    return {
      links: [
        {
          url: "/",
          icon: "map-marker-alt",
          text: "Cidade: São Paulo",
        },
        {
          url: "/",
          icon: "phone-alt",
          text: "Central de atendimento",
        },
        {
          url: "/wishlist",
          icon: "heart",
          text: "Lista de desejos",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.links {
  @apply flex flex-col mb-2 text-center;
  @apply md:flex-row md:justify-between;

  &__item {
    a {
      @apply text-white font-semibold text-sm;

      svg {
        @apply mr-4;
      }
    }
  }
}
</style>
