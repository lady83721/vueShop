<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="boxs">
      <router-view />
    </div>

    <ul class="ul">
      <li
        v-for="(item,index) in $store.state.arr"
        :key="index"
        @click="activeIndex==index"
        :style="{color:activeIndex==index?'red':''}"
      >
        <router-link :to="item.path">
          <p>
            <van-icon :name="item.name" size=".5rem" />
          </p>
          <p>{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: 0
    };
  },
  mounted() {
    // this.activeIndex = this.$store.state.activeIndex
  },
  methods: {}
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
