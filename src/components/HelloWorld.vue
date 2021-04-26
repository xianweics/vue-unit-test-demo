<template>
  <img :src="src" />
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    src: String,
  },
};
</script>
