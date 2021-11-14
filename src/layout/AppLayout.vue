<template>
  <div>
    <Header company="MagaNets" />
    <slot />
    <Footer
      info="Teste de desenvolvimento Front-End realizado para a vaga no Luizalabs. 2021."
    />
  </div>
</template>

<script>
import Header from "../components/base/header";
import Footer from "../components/base/footer";

export default {
  name: "AppLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
