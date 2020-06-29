import user from "@/view/login/user-zc"
import deng from "@/view/login/user-dl"
// 定义变量
const shop =[
   {
       path:'/shop/user',
       name:"user",
       component:user
   },
   {
    path:'/shop/deng',
    name:"deng",
    component:deng
},
];
export default shop;