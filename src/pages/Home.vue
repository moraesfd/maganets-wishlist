<template>
  <div class="home">
    <Header company="MagaNets" />
    <HomeList />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HomeList from '@/components/HomeList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeList
  }
}
</script>