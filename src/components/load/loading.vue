<template>
  <div>
    <van-overlay :show="true">
      <div class="wrapper" >
         <van-loading size="34px" vertical>加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},
  methods: {},
  components: {},
  computed: {}
};
</script>
<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>