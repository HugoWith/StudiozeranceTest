<template>
  <div id="app">
    <Navbar />
    <Section2 />
    <Section3 />
    <Slider />
    <Footer />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Section2,
    Section3,
    Slider,
    Footer
  }
};
</script>

<style lang="scss">
$maincolor: #ffcd1a;
$mainfont: "Karla";

// CSS GLOBAUX

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h2 {
  font-family: $mainfont;
  font-size: 32px;
  font-weight: bolder;
}

p {
  color: $maincolor;
  font-family: $mainfont;
}
</style>
