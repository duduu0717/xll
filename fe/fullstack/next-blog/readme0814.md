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
  NoteEditor 编辑
  NotePreview 笔记的预览

## 目录结构
- app 
 页面的主目录
 layout.js
 [id]
- components 组件
- lib 
 数据库操作
 常用的函数
- public
 静态资源 static server

### 配置alias 
 /app/note/[id]/page.js
 引入lib/redis.js
 相对路径../../../lib/redis.js
 短链接 @/lib/redis.js  alias
 baseURL
 path
  @/components/*": ["components/*"]
  @/lib/*": ["lib/*"]

  @ 直接来到根目录

## BEM 国际命名规范
- 原子类 tailwindcss
- BEM 维护
 Block 块
 Element 元素
 Modifier 修饰符
 Modifier--empty-state 修饰符的空状态
- layout
 - 负责 html标签
  head
   title
   meta keywords description
  body
   page.js
 - nav 侧边栏 导航栏
 - section 语义化标签
 - children page.js
 - to be continue 注释大法
  规划未来做的，有利于团队协作，记忆，维护，注释写好要做的事情

## 数据服务
- 选择了redis key：value 的NOSQL 内存数据库
运行在6379端口 没有数据表 不是关系型 不用sql驱动 在内存中
有点像localStorage 直接key:value 存储
高级的地方是 对不同类型的数据 有优化的存储方式 不同的方法
字符串 直接get/set
哈希表 直接hset/hgetall
 缓存 计数器 榜单
 redis + MYSQL 数据库读写I/O 瓶颈
 掘金首页，有文章列表，几分钟之内是不变的
 第一个用户来的时候 查MYSQL 数据库 posts列表 key：value 存到redis中
 下一个用户直接从redis中读取
- lib 目录下
 redis.js
 next.js 数据业务逻辑都放在lib目录下
 / -> lib notes -> sidebar -> seo 良好导向
- app/api/route.js
 做接口 rpc远程调用