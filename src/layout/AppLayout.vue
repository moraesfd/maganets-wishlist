<template>
  <div>
    <Header company="MagaNets" />
    <slot />
    <Footer
      info="Teste para demonstrar os conhecimentos em Front-End."
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
