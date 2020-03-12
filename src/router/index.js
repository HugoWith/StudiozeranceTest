import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Section2 from "../components/Section2.vue";
import Section3 from "../components/Section3.vue";
import Slider from "../components/Slider.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/section2",
    name: "Section2",
    component: Section2
  },
  {
    path: "/section3",
    name: "Section3",
    component: Section3
  },
  {
    path: "/slider",
    name: "Slider",
    component: Slider
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
