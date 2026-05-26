//0（n）遍历一次
//空间换时间
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error')
    return [];
  }
  let res = [],
    //js是简单的语言
    //早期js就是用来做点事件，交互的，没有hashmap
    //Hashmap就是数据结构
    obj = {};  //对象字面量
  for (let i = 0; i < arr.length; i++) {
    // get读操作 动态看待
    if (!obj[arr[i]]) {
    }

  }
}