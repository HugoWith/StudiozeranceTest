<template>
  <div class="section3">
    <div class="wrapper">
      <h3>NOS CLIENTS SONT GÉNIAUX</h3>
      <div class="logo-clients">
        <img src="../assets/Section_3/Clients/Yoko.jpg" alt="logoyoko" />
        <img src="../assets/Section_3/Clients/webedia.jpg" alt="logowebedia" />
        <img src="../assets/Section_3/Clients/avnier.jpg" alt="logoavnier" />
        <img src="../assets/Section_3/Clients/seasonly.jpg" alt="logoseasonly" />
        <img src="../assets/Section_3/Clients/joone.jpg" alt="logojoone" />
        <img src="../assets/Section_3/Clients/blown.jpg" alt="logoblown" />
        <img src="../assets/Section_3/Clients/boxtal.jpg" alt="logoboxtal" />
        <img src="../assets/Section_3/Clients/thefamily.jpg" alt="logothefamily" />
        <img src="../assets/Section_3/Clients/bonsoirs.jpg" alt="logobonsoirs" />
        <img src="../assets/Section_3/Clients/fempo.jpg" alt="logothefempo" />
        <img src="../assets/Section_3/Clients/bigfernand.jpg" alt="logothebigfernand" />
        <img src="../assets/Section_3/Clients/lafourche.jpg" alt="logothelafourche" />
        <img src="../assets/Section_3/Clients/riviera.jpg" alt="logotheriviera" />
        <img src="../assets/Section_3/Clients/cdiscount.jpg" alt="logothecdiscount" />
        <img src="../assets/Section_3/Clients/tealer.jpg" alt="logothetealer" />
        <img src="../assets/Section_3/Clients/respire.jpg" alt="logotherespire" />
        <img src="../assets/Section_3/Clients/rondorff.jpg" alt="logotherondorff" />
        <img src="../assets/Section_3/Clients/saeve.jpg" alt="logothesaeve" />
        <img src="../assets/Section_3/Clients/franklin.jpg" alt="logothefranklin" />
        <img src="../assets/Section_3/Clients/mars.jpg" alt="logothemars" />
        <!-- <img src="./assets/Section_3/Clients/webedia.jpg" alt="logowebedia" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section3",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$maincolor: #ffcd1a;
$mainfont: "Karla";

.section3 {
  height: 100vh;
  background-color: black;

  h3 {
    font-family: $mainfont;
    font-size: 32px;
    text-align: center;
    font-weight: lighter;
    color: white;
    padding-top: 70px;
  }
}

.wrapper {
  width: 85vw;
  margin: 0 auto;
}

.logo-clients {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  img {
    margin: 0 auto;
    width: 60%;
    height: auto;
  }
}
</style>
