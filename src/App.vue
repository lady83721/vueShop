<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
 
    };
  },
  mounted() {

  },
  methods: {
   
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
