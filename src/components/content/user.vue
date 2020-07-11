<template>
  <div>
    <ul class="shop">
      <li v-for="(item) in shopList" :key="item.id">
        <img :src="item.pic" alt />
        <p>{{ item.name }}</p>
        <p v-html="'￥'+item.minPrice"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:["shopList"],

  mounted() {},
  methods: {},
  components: {},
  computed: {}
};
</script>
<style scoped>
</style>