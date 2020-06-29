import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 引入自定义路由
import shop from "./shop"
export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/shop/user",
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 扩展运算符引入自定义文件中的路由
    ...shop
  ]
})
