# Next.js Blog
## 技术背景
- npx 
npx是npm自带工具，可以直接运行node包，无需全局安装依赖
尝试试用，测试电脑上跑项目
npx = npm i -g create-next-app + create-next-app
便捷
- create-next-app
React全栈开发脚手架
SSR SEO RSC
use client hydration水合

## 项目需求
笔记系统，crud笔记，支持markdown格式
存在数据库里的是markdown，页面显示的是html格式 marked库

1. 界面分为两列 左侧为笔记列表，右侧为笔记内容
2. 点击new按钮 增加一个note，增加后，左侧笔记列表会同时更新
App Router 文件级路由
/add POST 
/note
[id] 动态路由
page.js note详情
/edit 
[id]
page.js note编辑
3. 编辑功能，可以删除一个笔记，左侧同时更新
4. 可以编辑当前note，支持markdown
5. 搜索功能
next.js 数据业务开发

## 技术分析

### 路由
### 组件
规范驱动编程
规划需要哪些组件
 组件是工作单元，AI生成的工作单元
 开发之前不要急着写代码
 分析需求，技术方案（next.js）
 Sidebar
  SidebarSearchField EditButton（复用）
  SidebarNoteList
   NoteItem
 Note
  NoteEditor
  NotePreview

## 目录结构