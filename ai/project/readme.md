# user chat

- 罗贤康

## AI 全栈开发
- 前后端模块化分离
    - fe 目录
        opc 前端专注 
    - backend 后端
        opc 后端专注

### 前端
    三件套 
    html 负责结构 标签
    css 负责样式 头部引入 
    css 库 twitter 框架 
    html+css 早点结合 页面更早的让用户看到， 爽
    js 
    script 标签引入 common.js 

## 模块化 module 拆
- 设计思想
    代码，功能都放在一个文件，少数文件或目录
    - 不好维护 
    - 不好扩展 
    - 不好优化
    每个文件夹有职责划分 
    每个文件只做一件事 （一个类）

## html 结构 
- box 盒子的概念   
    - 先写盒子，再写内容
## css 业务
- container 
    中间内容宽度固定，左右留白
    PC 时代不同尺寸设备的布局
- row 
    一行 

## prompt 思考
- 页面好看， 聊到bootstrap css 框架
- 结构良好 搜索引擎良好，
    语义化标签 

## html
- 默认两类标签
    - 块级元素 做盒子 
        默认占据一行 
    - 行内元素 装内容
        兄弟们可以相安无事
- 不要div 标签满天飞
    盒子，块级元素
- **语义**化标签 
div 用来做盒子 不能一直用div
header footer aside main  
比div 更有语义
table 
    thead
        tr
            td*n
    tbody
        tr
            td*n
thead + tbody 非常重要，table语义 关键

## html 文档
- 都是文本类型 
    text/plain 纯文本
    text/html  html标签 使用 http 超文本传输协议 用browser 
    解析的document 
    <!DOCTYPE html>  ! html 最新版本 html5 区别html4

- dom 编程
    DOM js 里的Document Node 
    html 标签 js 对象
    document.querySelector()
    document 对象 用选择器查找 
    从html 页面来到了JS内存中
    .innerHTML 动态修改DOM 的内容

## 大厂特别注重底层
    html 语义化标签
    js DOM 编程 
    模块化 动态插入html 
    js 前端 准备好了document 对象 
    是树状结构 document.documentElement 根节点
    document.body 页面
    document.querySelector travel 树 
    查看节点， 孩子节点， 兄弟节点 挂载节点  

## 后端准备
js 通天 前端，后端，AI 
node package management
- npm init -y
    package.json **后端**项目描述文件
- npm i json-server
    把对象字面量 作为http server 提供