import Vue from "vue";
import VueRouter from "vue-router";
import StartView from "./components/StartView.vue";
import PrepareView from "./components/PrepareView.vue";
import ProcessView from "./components/ProcessView.vue";
import CompleteView from "./components/CompleteView.vue";
import ResultView from "./components/ResultView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routers: [
    {
      path: "/",
      compontent: StartView,
    },
    {
      path: "/prepare",
      compontent: PrepareView,
    },
    {
      path: "/process",
      compontent: ProcessView,
    },
    {
      path: "/complete",
      compontent: CompleteView,
    },
    {
      path: "/result",
      compontent: ResultView,
    },
  ],
});
