//时间复杂度：O(n)
//空间复杂度：O(1)
var removeElement = (nums, val) => {
  let k = 0;  // 慢指针，指向下一个可写入的位置

  for (let i = 0; i < nums.length; i++) {  // 快指针 i 遍历数组
    if (nums[i] != val) {  // 如果当前元素不是要删除的值
      nums[k] = nums[i];  // 把它写到位置 k，然后 k 后移
      k++
    }
    // 如果 nums[i] == val，什么也不做，i 继续前进，k 不动
  }

  return k;  // k 就是新数组的长度
};

// let nums = [1, 2, 3, 4];
// let k = 0;
// let i = 2;

// nums[k++] = nums[i];
S
// 执行过程：
// 1. k 当前值是 0，所以 nums[0] = nums[2] → nums[0] = 3
// 2. k 自增，k 变成 1

// 结果：
// nums = [3, 2, 3, 4]
// k = 1
