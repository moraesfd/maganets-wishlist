<template>
  <div>
    <HeaderLinks />
    <HeaderSearchBar />
  </div>
</template>

<script>
import HeaderLinks from "./HeaderLinks.vue";
import HeaderSearchBar from "./HeaderSearchBar.vue";
export default {
  components: {
    HeaderSearchBar,
    HeaderLinks,
  },
};
</script>
