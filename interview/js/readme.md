# 数组去重
## 手写代码，业务场景题目
[1,2,3,2,5]

## 形式
-完成功能的函数

## 注释
-有利于协作
 代码的开发者和使用者不是一个人
 可能会忘记
 注释是代码的一部分
 注释会提高代码的可读性
-一个函数一个功能
-封装 复杂功能
-健壮性  校验参数

## 数组API
-Array.isArray() 检查参数是否是数组
-arr.indexOf(item) 值在数组中出现的下标
-filter 过滤数组中的元素(arr,function(item,index))
 // true 保留
 // false 不保留
 return true/false
-sort()排序

## 时间复杂度和空间复杂度
O(n^2) 两重循环，fliter，indexOf
O(nlogn) 排序，相邻
O(n) 空间换时间 对象字面量 hashmap
O(1) 常量


 
