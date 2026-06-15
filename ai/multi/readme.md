# 多模态
- 生图模型
- 前端项目
    axios / fetch http 调用llm endpoint
    apiKey 写的明文
    - dotenv node 环境在后端做的，process
    - 前端环境 apiKey .env
## 前端工程化 vite
- 页面开发
- 工程开发
## vite
项目脚手架
## .env 流程
- vite    npm init vite
- .env.local  VITE_QWEN_API_KEY
- import.meta.env.VITE_QWEN_API_KEY
既可以使用llm，还可以保证key 不被泄露
VITE 就是前端项目在工程化这块的大管家
npm run dev VITE vite 接管整个项目
## 命令行
快速生成一个 vite 项目模板
npm init vite
    - 输入项目名称：qwen-image-demo
    - 选Vanilla
    - 选JavaScript
    然后就有了前端工程化的项目模版
pnpm install(pnpm i)   安装依赖
npm run dev    启动开发服务器