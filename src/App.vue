<template>
  <div id="app">
    <Navbar />
    <Section2 />
    <Section3 />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default {
  name: "app",
  components: {
    Navbar,
    Section2,
    Section3
  }
};
</script>

<style lang="scss">
$maincolor: #ffcd1a;
</style>
