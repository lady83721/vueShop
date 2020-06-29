// 引入axios 
// axios create 方法创建实例
// 使用实例对象，常见请求拦截器
// 使用实例创建响应拦截器
// export 跑出实例对象
// main，js 中引入request文件对象
 
import axios from "axios";

const Server = axios.create({
    baseURL:"",
    timeout:3000
})
// 请求
Server.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error)
});

// 响应拦截器
Server.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})

export default Server;
