# 流式输出

- agent 开发时代
 - agent 越来越像人,走向AGI
 - 如何将工作拆分,将ai擅长的交给agen,我们审核,不擅长的交给我们
  - 项目工程初始化交给agent
  1. 没有必要从0开始写 vue 项目
    src/APP.vue
    index.html
  2. 到github 拉取一个模板项目

- 热更新 hot reload
 开发阶段的利器 vite
 文件修改 -> 刷新页面 ->页面丢失状态->  局部刷新

 vue/react 数据状态 密密麻麻

- stream 返回就是二进制流
Uint8Array [十进制数]
0-255 之间无符号整数
安排解码

## server
### 后端返回的数据流
- 二进制文本流
- \n 换行符 区分每个数据块（data：）一行结束
兼顾相应速度和传输效率
 llm生成token时 json短一点
 llm再生成一些token,json格式化
 一次性发送多少个data：不确定的，可能是一行，也可能是多行
- data：{} json格式文本completion 差不多结构 
 可能会出错，数据包有一定的大小限制
 当json 数据超过大小，会截断，json格式化可能会出错
 try{

 }catch(err){
 // 出错，不能扔掉，下一段接着要，接着发送被截断的后面部分
 }