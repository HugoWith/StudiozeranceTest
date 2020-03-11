<template>
  <div class="navbar">
    <div class="block-left">
      <!-- <img src="@/assets/Navbar/logo.png" alt="logoZerance" /> -->
      <div class="img-nav"></div>
      <h2>
        Studio
        <br />Zerance.
      </h2>
    </div>
    <div class="block-right">
      <h2>Nos Clients</h2>
      <h2>Notre Offre</h2>
      <h2>Le Studio</h2>
      <h2>Contact</h2>
    </div>
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
.navbar {
  display: flex;
  justify-content: space-between;
  height: 20vh;
}

.img-nav {
  background-image: url("../assets/Navbar/logo.png");
  width: 125px;
  height: 630px;
  background-size: contain;
  background-repeat: no-repeat;
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
  }
}
</style>