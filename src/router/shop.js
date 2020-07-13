import user from "@/view/login/user-zc"
import deng from "@/view/login/user-dl"
import homes from "@/view/content/home"
import index from "@/view/content/index"
import index2 from "@/view/content/index2"
import index3 from "@/view/content/index3"
import index4 from "@/view/content/index4"
import cuts from "@/components/click/cut"
import good from "@/components/click/good"
import item from "@/components/click/item"
import search from "@/components/click/search"
import special from "@/components/click/special"
import shopping from "@/components/shop/shopping"
import smallspecial from "@/components/click/small-special"
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
    path: '/good',
    name: "good",
    component: good,
    meta: {
      title: "严选商城-砍价"
    }
  },
  {
    path: '/cuts',
    name: "cuts",
    component: cuts,
    meta: {
      title: "严选商城-精选商品"
    }
  },
  {
    path: '/item',
    name: "item",
    component: item,
    meta: {
      title: "严选商城"
    }
  },
  {
    path: '/search',
    name: "search",
    component: search,
    meta: {
      title: "严选商城-搜索"
    }
  },
  {
    path: '/special',
    name: "special",
    component: special,
    meta: {
      title: "严选商城-搜索"
    }
  },
  {
    path: '/special/small-special/:id',
    name: "smallspecial",
    component: smallspecial,
    meta: {
      title: "严选商城-搜索"
    }
  },
  {
    path: '/shopping/:id',
    name: "shopping",
    component: shopping,
    meta: {
      title: "严选商城-购物车"
    }
  },

  {
    path: "/",
    // redirect:"/",
    name: "homes",
    component: homes,
    children: [{
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
    ]
  },
];
export default shop;
