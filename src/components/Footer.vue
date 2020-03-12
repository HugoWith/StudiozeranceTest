<template>
  <div class="Footer">
    <div class="slider">
      <div class="words-slides">
        <h2 class="words-1">
          Good cat Bad cat / Frédéric Diefental / Quand c’est trop, c’est
          Tropico / Qu’est ce qui est jaune et qui attend ?
          <span
            >Good cat Bad cat / Frédéric Diefental / Qu’est ce qui est jaune et
            qui attend ?</span
          >
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$maincolor: #ffcd1a;
$mainfont: "Karla";

.words-slides {
  background-color: $maincolor;
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;

  /*-webkit-animation-iteration-count: 2,2,2,2; /* Chrome, Safari, Opera */
  /*animation-iteration-count: 2,2,2,2;*/
}

.words-1 {
  color: white;
  position: absolute;
  font-family: $mainfont;
  font-weight: bolder;
  float: left;
  font-size: 30px;
  vertical-align: center;
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 40px;
  animation: slide1 20s linear infinite;
}

@-webkit-keyframes slide1 {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
@-moz-keyframes slide1 {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
@keyframes slide1 {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
