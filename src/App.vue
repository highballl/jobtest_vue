<template>
  <div id="app">
    <Start />
    <Prepare />
    <Process />
    <Complete />
    <Result />
  </div>
</template>

<script>
import Start from "./components/Start.vue";
import Prepare from "./components/Prepare.vue";
import Process from "./components/Process.vue";
import Complete from "./components/Complete.vue";
import Result from "./components/Result.vue";

export default {
  components: {
    Start,
    Prepare,
    Process,
    Complete,
    Result,
  },
};
</script>

<style></style>
