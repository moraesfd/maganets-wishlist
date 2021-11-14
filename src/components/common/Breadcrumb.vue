<template>
  <ol class="breadcrumb">
    <li class="breadcrumb__item">
      <router-link to="/" class="hover:underline">Home</router-link>
    </li>
    <li v-if="type == 'wishlist'" class="breadcrumb__arrow">&rsaquo;</li>
    <li v-if="type == 'wishlist'" class="breadcrumb__item">
      <router-link to="/wishlist" class="hover:underline"
        >Lista de desejos</router-link
      >
    </li>
  </ol>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    type: String,
  },
};
</script>

<style lang="scss">
.breadcrumb {
  @apply container flex text-gray-700;

  &__item {
    @apply pr-2 pt-6 font-black;
  }

  &__arrow {
    @apply pr-2 pt-6 text-gray-500 select-none;
  }
}
</style>
