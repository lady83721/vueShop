<template>
  <div>
    <ul class="shop">
      <router-link
        :to="'/shopping/'+item.id"
        tag="li"
        v-for="(item) in shopList"
        :key="item.id"
        @click="shop(item)"
      >
        <img :src="item.pic" alt />
        <p>{{ item.name }}</p>
        <p v-html="'￥'+item.minPrice"></p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["shopList"],

  mounted() {},
  methods: {},
  components: {},
  computed: {}
};
</script>
<style scoped>
</style>