## 3d
- canvas 
html5新增标签，通过js api绘制

## css 3d
css的属性去触发3d绘制，还会带来GPU加速
哪怕是2d的界面，我们也会手动3d化
## 布局 layout
- 外层盒子负责布局
- 内层盒子负责展示

## 水平垂直居中
- 父容器
 body 100% 100vh/vw（css3新单位，viewport height/width）
 100份按比例分配
 实现移动端适配
- 子元素

## 行内/块级
- html元素有两类 行内 块级
div ul 等块级
span a 等行内
块级元素 block
 -可以设置宽高
 -独占一行
行内元素 inline
 -不能设置宽高
 -不能独占一行
display属性
- flex 弹性布局 会开启一个弹性格式上下文
- inline-block 行内块元素 可以设置宽高 不会独占一行

浏览器默认块级/行内元素->display属性手动切换inline/block->格式化上下文（flex/inline-block/grid）

inline-block 有个缺陷
默认空格符会占据一定的大小

## 定位
position：relative 相对定位
position：absolute 绝对定位