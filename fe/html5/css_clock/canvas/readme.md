# AI 游戏
- 页游
4399 flash 游戏
html5 2d/3d 游戏
## HTML5 炫酷功能
Canvas 2d/3d 数据可视化/网页游戏/酷炫页面
- canvas 标签
    HTML5 画布标签，用 JS 手动绘制图形、动画、游戏
- canvas api
    - canvas 有大量的js绘制api
    - 首先获取canvas标签
    - 通过getContext(2d/3d)方法获取绘制上下文对象
        3d会激发显存 GPU能力
        ai 游戏爆发 three.js
        物理大模型
    - 可以绘制各种图形
        rect 矩形
        circle 圆
        line 线
    - clearRect() 擦除图形
        左上角位置(x,y)+宽度+高度
    - 颜色
        fillStyle 填充颜色
        strokeStyle 边框颜色
- 怎么做游戏？
    按帧动画
    - clear 擦掉之前的那一帧
    - 画上新的
    - 显卡帧 60帧/秒
## requestAnimationFrame(animate) 方法
浏览器提供的适配屏幕刷帧率的高效动画帧调度函数
- 不能用setInterval
    时间可能和显示设备的刷帧率不在一个频道上
    requestAnimationFrame是等于刷帧率的，体验更协调
- 参数 递归的方式 绘制函数
- 再加上clear方法
    帧动画不停的画，就有了动画
    加上交互，就成了游戏。
## 飞机游戏
- 工程初始化
    vite,git
    帮我们安装必要的依赖
    .env
- 可以和cc头脑风暴
    - 产品方案
        游戏功能列表，选择其中的一些，做第一个阶段的开发
        MVP 最小可行性方案
    - 技术路线什么样的？
        落实技术方案
- llm 生成
实战：跟claude code对话
- 帮我使用vite生成一个原生js的项目
- 我想做一个移动端Web小游戏，类似雷霆战机游戏，可以给我分析一下需要实现的功能吗？
- ❯ 用原生HTML Canvas写一个打飞机小游戏      
1、底部玩家飞机，方向键上下左右移动，边界限制                   
2、空格键发射子弹，子弹向上飞行      
3、顶部随机生成敌机向下移动
4、子弹击中敌机销毁并加分，敌机碰到玩家游戏结束
5、用requestAnimationFrame做游戏循环，全部绘制在canvas里，不要引入第三方游戏引擎
## 数据可视化
echart 报表
ECharts 是百度开源、基于 JavaScript 的高性能可视化图表库，支持各类折线 / 饼图 / 地图等数据图表快速开发
实战：跟claude code对话
- 帮我使用vite生成一个原生js项目，帮助我安装好echarts
- 帮我随机生成一些肖氏电商集团一年运动鞋的每个月销售数据，有一定的涨跌，以百万元为单   位，等下用于柱状图的绘制，单独帮我放到一个data.js文件中
- 用这些数据在main.js中画一个柱状图
- 帮我启动