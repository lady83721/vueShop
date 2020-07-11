<template>
 <div>
     <div class="cut">
        <dl v-for="(item) in cutList" :key="item.id">
          <dt>
            <img :src="item.pic" alt />
          </dt>
          <dd>
            <div class="top">
              <p>{{ item.name }}</p>
              <p>{{ item.characteristic }}</p>
            </div>

            <!-- 价格销量 -->
            <div class="price">
              <span>
                <p style="color:red">￥{{ item.minPrice }}</p>
                <p>低价</p>
              </span>
              <span>
                <p>￥{{ item.originalPrice }}</p>
                <p>原价</p>
              </span>
              <span>
                <p>{{ item.stores }}</p>
                <p>限量</p>
              </span>
            </div>
            <!-- 价格销量结束 -->
          </dd>
          <!--  -->
        </dl>
        <!-- 一条数据渲染循环 -->
      </div>
      <!--  -->
</div>
</template>

<script>
export default {
 data () {
  return {
  };
 },
props:["cutList"],

 mounted(){},
 methods: {},
 components: {},
 computed: {},



}

</script>
<style scoped>
</style>