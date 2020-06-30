import user from "@/view/login/user-zc"
import deng from "@/view/login/user-dl"
// 定义变量
const shop =[
   {
       path:'/shop/user',
       name:"user",
       component:user,
       meta:{
           title:"严选商城-注册"
       }
   },
   {
    path:'/shop/deng',
    name:"deng",
    component:deng,
    meta:{
        title:"严选商城-登陆"
    }
},
];
export default shop;