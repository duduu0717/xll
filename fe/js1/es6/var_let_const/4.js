// 1.var
// 执行顺序
// 编译顺序 检测代码语法
// 准备好执行上下文（变量环境）
// 执行阶段
console.log(pizza)
var pizza = 'Deep Dish'
// 正确顺序
// var pizza; 只提升声明，默认值 undefined
// console.log(pizza); 打印 undefined
// pizza = 'Deep Dish'; 这里才赋值
// var 声明的变量，会把声明提升到最前面，但是赋值不会提升
