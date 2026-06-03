//Set 是什么？ ES6 新增的数据结构
//Hashmap O(1) 时间复杂度 key查值
//Set 不重复的数据容器

function unique(arr){
    if(!Array.isArray(arr)) {
        console.log('type error');
        return [];
    }
    // Set 去重
    return [...new Set(arr)];
    
}
