---
name: submit-xll-ai
description: Use when changes inside the xll_ai Git repository need to be reviewed, committed, and synchronized to its configured Gitee and GitHub main branches.
---

# Submit `xll_ai` Changes

只处理 `xll_ai` 仓库本身，不处理父仓库或其他目录。把“检查变更、提交、双端推送、远程校验”作为一个不可跳步的事务；任何失败、分支不符、远程不符或内容不明确都立即停止。

## 固定边界与不变量

- 仓库根目录必须是当前 Skill 所在仓库的 `xll_ai` 目录：用 `git rev-parse --show-toplevel` 核对绝对路径。
- 目标分支固定为 `main`；不得自行切换、拉取、合并、rebase 或改写历史。
- 不修改 remote、Git 身份、凭证、`.gitignore` 或用户未要求的文件。
- 禁止 `git push --force`、`--force-with-lease`、删除远程分支和任何历史重写。
- 不执行 `git add -A`，直到逐项审查变更路径、内容和敏感性。

## 工作流

### 1. 预检仓库、身份和远程

在 `xll_ai` 目录运行：

```powershell
git rev-parse --show-toplevel
git branch --show-current
git config user.name
git config user.email
git remote -v
git config --get-regexp '^remote\.'
```

只有仓库根目录确认为 `xll_ai`、当前分支为 `main`、Git 身份已配置，并且能明确识别 Gitee 与 GitHub 目标时才继续。期望目标是：

- Gitee fetch：`git@gitee.com:dudu0717/ai_doubao_xll.git`
- GitHub fetch：`git@github.com:duduu0717/xll.git`

记录 `origin` 的所有 `pushurl`。若 `origin` 同时包含 Gitee 和 GitHub 两个 push URL，只允许执行一次 `git push origin main`，不要再执行 `git push github main`，以免重复推送。若未配置双 push URL，则分别向明确的 Gitee、GitHub remote 推送；缺少任一目标时停止并报告实际配置。

### 2. 审查变更

先运行：

```powershell
git status --short --branch
git diff --stat
git diff -- <每个已跟踪变更路径>
```

对每个未跟踪路径先直接读取内容，再决定是否纳入。检查路径和内容是否包含以下敏感或不应提交项目：`.env`、`.env.*`、`.npmrc`、`.netrc`、私钥/证书（`*.pem`、`*.key`、`*.p12`、`*.pfx`、`id_rsa`、`id_ed25519`）、token、密码、凭证 JSON、`.ssh/`、`.aws/`、大体积构建产物或无法解释的二进制文件。发现疑似秘密、内容不明确、嵌套仓库或子模块指针变化时立即停止并报告，不得自动清理、忽略或猜测。

只把用户要求的 `xll_ai` 变更纳入；父仓库的 `xll_ai` gitlink 状态不属于本 Skill 的提交对象。

### 3. 暂存并复核

逐项指定路径执行 `git add -- <路径>`，不要使用 `git add -A`。随后必须复核：

```powershell
git diff --cached --name-status
git diff --cached -- <每个可读的暂存路径>
```

暂存区出现未审查路径、秘密、错误内容或超出 `xll_ai` 边界的文件时，停止，不得提交。没有任何已审查变更时，不创建空提交。

### 4. 生成并创建提交

提交摘要优先使用用户提供的内容；用户未提供且无法从 diff 得出准确摘要时，先询问，不要编造。提交信息应清楚描述实际变更，例如：

```text
0811 新增WebGPU单例示例
```

创建提交后立即记录 `git rev-parse HEAD`。提交失败时保留现场并报告原始错误，不重试会改变历史的命令。

### 5. 推送到两个远程

根据第 1 步记录的 push URL 选择唯一策略：

```powershell
# origin 同时配置 Gitee 与 GitHub pushurl 时，只执行这一条
git push origin main

# 只有在两个目标由独立 remote 明确配置、且未被 origin pushurl 覆盖时才分别执行
git push <gitee-remote> main
git push <github-remote> main
```

首个推送失败就停止；不自动 `pull`、`rebase`、合并、强推或修改远程配置。若多 push URL 导致部分成功，保留本地提交并报告每个远程的实际状态，不宣称已完成。

### 6. 验证交付

推送后运行：

```powershell
git rev-parse HEAD
git ls-remote origin refs/heads/main
git ls-remote github refs/heads/main
```

分别从输出提取完整 SHA，只有本地 `HEAD`、Gitee `main` 和 GitHub `main` 三者完全一致时，才能报告提交和双端推送成功。SHA 缺失、不一致、远程不可访问或分支发生并发更新时，逐项报告实际结果，不猜测原因、不自动修复。

## 常见错误与防护

| 错误倾向 | 防护 |
| --- | --- |
| 在父仓库执行 Git 命令 | 先核对 `git rev-parse --show-toplevel`，全程在 `xll_ai` 内操作 |
| 看到两个 remote 就重复推送 | 先检查 `remote.origin.pushurl`；双 URL 时只推 `origin` 一次 |
| 用 `git add -A` 带入秘密或无关文件 | 逐路径审查、逐路径 `git add`，再复核暂存 diff |
| 远程落后就自动 pull/rebase/force push | 停止并报告，保留本地提交等待用户决定 |
| 只看到 push 命令成功就宣称完成 | 必须比较本地与两个远程的完整 SHA |
| 没有明确摘要却随意提交 | 询问用户或基于已审查 diff 生成可解释摘要 |

## 最终报告

成功时报告：提交信息、完整提交 SHA、Gitee `main` SHA、GitHub `main` SHA，以及三者一致的证据。失败时报告：停止在哪一步、原始命令错误、已成功的远程（如有）和本地 HEAD；不要隐藏部分成功或承诺后台继续处理。
