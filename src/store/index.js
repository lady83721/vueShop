import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        activeIndex:0,
        arr:[
            {name:"smile-o",path:"/",title:"首页",img:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2841247860,2911841437&fm=26&gp=0.jpg"},
            {name:"diamond-o",path:"/index2",title:"喜欢",img:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3857728358,308581856&fm=26&gp=0.jpg"},
            {name:"chat-o",path:"/index3",title:"消息",img:"http://img2.imgtn.bdimg.com/it/u=2816433753,267880517&fm=26&gp=0.jpg"},
            {name:"more-o",path:"/index4",title:"其他",img:"http://img3.imgtn.bdimg.com/it/u=2081362183,2237717106&fm=26&gp=0.jpg"},
        ]
    },
    mutations:{
       
    },
    actions:{},
    getters:{},
})
export default store;