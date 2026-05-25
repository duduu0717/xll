# git 开发必备技能

- xll_ai 目录是什么
项目开发目录
缺点？
 无法多人协作
 单机版本
 中央仓库（remote） github/gitee/gitlab
 团队（分布在每个人的机器上 local）共享仓库的代码 
 分布式 distribute 
- 文件硬盘有可能会坏，找到之前的修改
  需要有版本的概念 
  不同的文件有不同的版本(快照)

- 不够工程化


## git init
-初始化
-本地的代码项目目录升级为带有版本控制能力的代码仓库
-目录下多了一个.git文件夹（隐藏的）
 -不能乱改
  按git的要求来执行
 -win用户和linux shell 脚本不一样
 -项目目录下 git bash 最简版的linux
- ls -all
## git add 文件名

- 将readme.md 文件添加到暂存区（staging）


## git commit -m "desc"
-m 说明 不能乱写 leader主要看这个
最终添加到仓库中

## 为什么要用两条命令把文件添加到仓库
 -完成某项功能 index.html,common.css,common.js
  stage 暂存区 多次添加 不会带来仓库版本的改变
  git add index.html common.css common.js
  提前后悔一下
  git commit -m '首页页面功能'

- 提交暂存区的文件到本地仓库
- 提交信息：描述你做了什么修改

## git status 
任何你需要清楚当前仓库状态的时候
任何关键时刻先git status
2 insertions 2行新增 严谨 


## 文件状态
- untracked 未跟踪状态
-to be committed 已添加到暂存区，等待提交
-add 多次 commit一次 （开发任务）
保证仓库的干净


- add a repo 远程仓库