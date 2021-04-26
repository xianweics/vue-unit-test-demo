<template>
  <div id="app">
    <HelloWorld :src="src" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  computed: {
    src() {
      return require("@/assets/logo.png");
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
