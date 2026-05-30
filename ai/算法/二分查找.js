// 二分查找 JS 复习笔记（左闭右闭版｜个人错题总结）
// 一、核心题意
// 有序数组，找目标值 target 的下标，找不到返回 -1。
// 时间复杂度：O(log n)
// 固定写法：左闭右闭区间 [left, right]
// 二、标准正确代码（最终背诵版）
var search = function (nums, target) {
  let left = 0, mid;
  let right = nums.length - 1;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
// 三、核心思路（必背 4 句话）
// 1. 左闭右闭：左右边界都包含在查找范围内。
// 2. 循环条件 left <= right：left === right 时还有一个数要判断，不能停。
// 3. 只改边界 left / right，绝对不修改 mid。
// 4. 比较的是 nums[mid]（值）和 target，返回的是 mid（下标）。
// 四、mid 公式详解（两种等价写法）
// ✅ 安全写法（推荐）
// mid = left + Math.floor((right - left) / 2)
// ✅ 位运算简写（面试常用）
// mid = left + ((right - left) >> 1)
// ❌ 不推荐：(left + right) / 2 容易大数溢出
// 作用：防止 left+right 溢出，结果完全等价。
// 五、区间更新逻辑（死记）
// 1. nums[mid] > target：目标在左边 → right = mid - 1
// 2. nums[mid] < target：目标在右边 → left = mid + 1
// 3. 相等：直接 return mid（返回下标）

// ---
// 六、你本次所有犯错点（重点复习）
// 1. 语法错误
// ❌ if({mid > target{ 多打左大括号，直接报错
// ✅ if 后面只能跟小括号表达式
// ❌ 拼写错误：lenght / retuen
// ✅ 正确：length、return
// 2. 变量初始化错误（高频坑）
// ❌ let left, mid = 0
// 等价于 left 未定义、mid=0，导致循环判断出错
// ✅ 正确：let left = 0, mid;
// 3. 最致命逻辑错误
// ❌ 用下标和值比较：mid > target
// ✅ 必须比较：nums[mid] 和 target
// mid 是位置，nums[mid] 是数值！！
// 4. 乱改 mid（超级大忌）
// ❌ mid = right - 1 / mid = left + 1
// ✅ 二分 只能改 left、right，mid 每轮重新计算
// 5. return 搞混
// ❌ return nums[mid] （返回的是数值）
// ✅ return mid （题目要的是下标索引）
// 6. return 位置错误
// ❌ 把 return 写在 if 外面，每轮循环直接退出
// ✅ 匹配成功才 return，找不到最后统一 return -1