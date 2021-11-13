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
import Header from "../components/header";
import Footer from "../components/footer";

export default {
  name: "AppLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
