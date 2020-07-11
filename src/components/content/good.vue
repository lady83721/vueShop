<template>
  <div>
    <van-swipe
      backgroundcolor="white"
      :loop="false"
      :width="300"
      :height="150"
      class="swips"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(item) in newList" :key="item.id" style="margin:0 10px;">
        <img :src="item.pic" alt />
        <p v-html="item.title"></p>
        <p v-html="item.descript"></p>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:["newList"],
  mounted() {},
  methods: {},
  components: {},
  computed: {}
};
</script>
<style scoped>
</style>
