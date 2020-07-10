import user from "@/view/login/user-zc"
import deng from "@/view/login/user-dl"
import index from "@/view/content/index"
import index2 from "@/view/content/index2"
import index3 from "@/view/content/index3"
import index4 from "@/view/content/index4"
// 定义变量
const shop = [{
    path: '/shop/user',
    name: "user",
    component: user,
    meta: {
      title: "严选商城-注册"
    }
  },
  {
    path: '/shop/deng',
    name: "deng",
    component: deng,
    meta: {
      title: "严选商城-登陆"
    }
  },
  {
    path: '/',
    name: "index",
    component: index,
    meta: {
      title: "严选商城-首页"
    }
  },
  {
    path: '/index2',
    name: "index2",
    component: index2,
    meta: {
      title: "严选商城-首页"
    }
  },
  {
    path: '/index3',
    name: "index3",
    component: index3,
    meta: {
      title: "严选商城-首页"
    }
  },
  {
    path: '/index4',
    name: "index4",
    component: index4,
    meta: {
      title: "严选商城-首页"
    }
  },
];
export default shop;
