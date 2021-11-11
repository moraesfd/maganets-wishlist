<template>
  <div class="search-bar">
    <span>
      <font-awesome-icon icon="search" />
    </span>
    <input
      type="text"
      placeholder="Busca"
      v-model="searchQuery"
      @input="sendQuery"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    sendQuery() {
      this.$root.$emit("sendQuery", this.searchQuery);
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  @apply relative flex w-full flex-wrap items-stretch mb-3;

  span {
    @apply z-10 h-full leading-snug font-normal text-center text-gray-500
        absolute bg-transparent rounded text-base items-center 
        justify-center w-8 pl-2 py-2;
  }

  input {
    @apply px-2 py-2 placeholder-gray-400 text-gray-600 font-bold relative
      bg-white bg-white rounded text-sm border border-gray-400
        outline-none focus:outline-none focus:ring w-full pl-10;
  }
}
</style>
