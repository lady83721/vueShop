<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <load v-show="$store.state.loading"></load>
    <router-view></router-view>
  </div>
</template>

<script>
import Load from "@/components/load/loading"
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components:{
     Load
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
