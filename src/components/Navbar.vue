<template>
  <div class="navbar">
    <div class="block-left">
      <div class="img-nav"></div>
      <h2>
        Studio
        <br />Zerance.
      </h2>
    </div>
    <div class="block-right">
      <a href=""> <h2>Nos Clients</h2></a>
      <a href=""> <h2>Notre Offre</h2></a>
      <a href=""> <h2>Le Studio</h2></a>
      <a href=""> <h2>Contact</h2></a>
    </div>

    <div id="nosclients"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$maincolor: #ffcd1a;
$mainfont: "Karla";

a {
  text-decoration: none;
  color: black;
}

.navbar {
  display: flex;
  justify-content: space-between;
  height: 20vh;
}

.img-nav {
  background-image: url("../assets/Navbar/logo.png");
  width: 125px;
  height: 550px;
  background-size: contain;
  background-repeat: no-repeat;
}
@media (max-width: 600px) {
  .img-nav {
    width: 80px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.block-left {
  display: flex;
  padding: 10px;

  h2 {
    margin-left: 10px;
  }
}
.block-right {
  display: flex;
  justify-content: space-evenly;
  h2 {
    margin-left: 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  h2:hover {
    color: #ffcd1a;
  }
  h2:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 6px;
    left: 0%;
    position: relative;
    background: #ffcd1a;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  h2:hover:after {
    color: #ffcd1a;
    width: 100%;
    left: 0;
  }
}
@media (max-width: 600px) {
  .block-right {
    display: none;
  }
}
</style>
