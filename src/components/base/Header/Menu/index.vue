<template>
  <div>
    <Links />
    <SearchBar />
  </div>
</template>

<script>
import Links from "./Links.vue";
import SearchBar from "./SearchBar";
export default {
  components: {
    SearchBar,
    Links,
  },
};
</script>
