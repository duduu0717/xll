//F(n) = F(n-1) + F(n-2)自顶向下思考
//树状结构
//相同的问题，递归公式
//退出条件

function climbStairs(n) {
  // 递归终止条件（最底层节点）
  if (n === 1) return 1;
  if (n === 2) return 2;
  // 拆分调用，再把结果相加
  return climbStairs(n - 1) + climbStairs(n - 2);
}
climbStairs(3);
