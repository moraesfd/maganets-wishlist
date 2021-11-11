<template>
  <div>
    <Header company="MagaNets" />
    <slot />
    <Footer
      info="Projeto teste para o Luizalabs realizado por Felipe de Moraes. 2021"
    />
  </div>
</template>

<script>
import Header from "../components/base/Header.vue";
import Footer from "../components/base/Footer.vue";

export default {
  name: "LayoutDefault",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
