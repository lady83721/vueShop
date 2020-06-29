const storage ={
    // 设置本地存储
    // isJson 是否需要对数据进行json对象转换
    set:function(key,value,isJson=false){
        // 设置的方法，先做判断，key和value是否为空
        if(key.length == 0 || value.length == 0){
            return false;
        }
        // 判断是否需要转换json字符串，true转换，false不转换
        let data = (isJson == true?JSON.stringify(value):value);
        // 设置缓存值即可
        localStorage.setItem(key,data)
    },

    // 获取本地存储
    get:function(key,isJson){
        if(key.length== 0){
            return false;
        }
        let data = localStorage.getItem(key);
        return isJson == true?JSON.parse(data):data
    },

    // 删除本地存储
    remove:function(key){
        if(key.length== 0){
            return false;
        }
        localStorage.removeItem(key)
    }
}
export default storage