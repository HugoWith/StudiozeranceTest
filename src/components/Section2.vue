<template>
  <div class="section2">
    <div class="main-titles">
      <h3>SINCE 2016</h3>
      <h1>
        &lt; We create from scratch
        <br />amazing Shopify />
        <div class="underline-img"></div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section2",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$maincolor: #ffcd1a;
$mainfont: "Karla";

.section2 {
  height: 65vh;
}

h1 {
  font-family: $mainfont;
  font-size: 52px;
  font-weight: bolder;
  text-align: center;
}
h2 {
  font-family: $mainfont;
  font-size: 32px;
  font-weight: bold;
}
h3 {
  font-family: $mainfont;
  font-size: 32px;
  text-align: center;
  font-weight: lighter;
}

p {
  color: $maincolor;
  font-family: $mainfont;
}

.main-title {
  margin: 0 auto;
}

.underline-img {
  background-image: url("../assets/Section_2/inderline.png");
  width: 400px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: -2% 50%;
}
</style>
