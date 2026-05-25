/**
 * @func 数组去重
 * @param {Array} arr 数组
 * @return {Array} 去重后的数组
 * @author xll
 * @date 2026-05-25
 */
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return [];
  }
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(unique([1, 2, 3, 2, 5]));