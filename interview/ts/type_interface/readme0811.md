# TS 必考题 type & interface的区别
- interface 的开发用法
- 共同点
 interface和type都可以描述对象的解构
 用于函数参数，返回值
 给对象，变量做类型约束

interface User{
  name: string;
  age: number;
  avatarUrl: string;
}

type UserType = {
  name: string;
  age: number;
  avatarUrl: string;
}

# 不同点
- 继承
- 申明的合并
 - 接口属性可以分头多次约束，可以合并
 - type类型名不能重复，只能申明一次
- 能否表示非对象类型
- 函数类型的区别
 都可以表达，有些区别，type更方便