<template>
  <div class="slider">
    <VueSlickCarousel v-bind="options">
      <slide class="section bg-seasonly">
        <img src="../assets/Slider/Artboard_2.jpg" alt class="slider-img" />
        <div class="block-text-seasonly">
          <h3 class="card-title">FROM SCRATCH /</h3>
          <img
            src="../assets/Section_3/Clients/seasonly_white.png"
            alt="logoseasonly"
            class="logo-img"
          />
          <p>
            Développement site from scratch et d’un quiz personnalisé avec
            abonnement. <br /><br />
            Développement site from scratch et d’un quiz personnalisé avec
            abonnement.
          </p>
          <h2>
            &lt;Voir plus/>
            <div class="underline-img-seasonly"></div>
          </h2>
        </div>
      </slide>

      <slide class="section">
        <img src="../assets/Slider/Artboard_1.jpg" alt class="slider-img" />
        <div class="block-text-joone">
          <h3 class="card-title">RECHARGE FEATURES /</h3>
          <img
            src="../assets/Section_3/Clients/joone_white.png"
            alt="logojoone"
            class="logo-img"
          />
          <p>
            - Développement front-end <br /><br />
            - Features avancées Recharge (paiement récurrent)<br /><br />
            - Interface analytics sur-mesure
          </p>
        </div>
      </slide>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      options: {
        arrows: true,
        centerMode: false,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        nextArrow: "#custom-next-arrow"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$maincolor: #ffcd1a;
$mainfont: "Karla";

@media (max-width: 600px) {
  .slider {
    height: 215px;
  }
}

@media (max-width: 600px) {
  .slider-img {
    width: 100vw;
  }
}

.bg-slide {
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}

.slick-next {
  position: absolute;
  right: 20%;
  height: 50px;
  width: 50px;
}

.slick-next:hover {
  color: $maincolor;
}

.bg-seasonly {
  position: relative;
}

.block-text-seasonly {
  background-color: white;
  width: 30vw;
  height: 60vh;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  padding: 25px;
  img {
    margin: 0 auto;
  }

  p {
    margin: 20px auto;
    font-family: $mainfont;
    text-align: center;
    color: black;
    font-size: 21px;
    padding: 30px;
  }
  h2 {
    margin: 0 auto;
    font-family: $mainfont;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  h2:hover {
    transition: all 0.2s ease-in-out;
    font-style: italic;
    font-size: 31px;
  }
}
@media (max-width: 600px) {
  .block-text-seasonly {
    height: 30vh;
    h3 {
      font-size: 12px;
    }
    h2 {
      font-size: 10px;
    }
    p {
      font-size: 8px;
      padding: 5px;
    }
  }
}
.underline-img-seasonly {
  background-image: url("../assets/Section_2/inderline.png");
  width: 200px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: -4% 30%;
}
@media (max-width: 600px) {
  .underline-img-seasonly {
    width: 50px;
  }
}

.block-text-joone {
  background-color: white;
  width: 30vw;
  height: 50vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
  padding: 25px;
  img {
    margin: 0 auto;
  }
  p {
    margin: 20px auto;
    font-family: $mainfont;
    text-align: center;
    color: black;
    font-size: 21px;
    padding: 30px;
  }
  h2 {
    margin: 0 auto;
    font-family: $mainfont;
    text-align: center;
  }
  .underline-img-seasonly {
    background-image: url("../assets/Section_2/inderline.png");
    width: 200px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: -4% 30%;
  }
}

@media (max-width: 600px) {
  .block-text-joone {
    transform: translateY(-65%) translateX(100%);
    h3 {
      font-size: 12px;
    }
    h2 {
      font-size: 10px;
    }
    p {
      font-size: 8px;
      padding: 5px;
    }
  }
}

@media (max-width: 600px) {
  .logo-img {
    width: 10vh;
  }
}
</style>
