---
name: 每日git提交
description: 一键完成每日提交:暂存所有改动,按「MMDD 日常更新」格式生成提交信息,并同时推送到 Gitee 和 GitHub。
---

# 每日一键提交(Gitee + GitHub)

按以下步骤执行。任何一步失败,立即停止并向用户报告,不要继续。

## 步骤

1. **检查改动**:运行 `git status --porcelain` 和 `git log origin/<当前分支>..HEAD --oneline`。
   - 没有改动、也没有未推送的提交 → 告知用户「今天没有需要提交的内容」,结束。
   - 没有新改动、但有未推送的既有提交 → 跳到第 5 步直接推送。

2. **敏感文件检查**:查看待提交文件列表,如果包含 `.env`、`.env.*`、`*.pem`、`*.key`、`credentials`、密钥/证书类文件,**不要提交**。列出这些文件,提醒用户将其加入 `.gitignore` 后再重新运行。

3. **暂存**:`git add -A`

4. **提交**:
   - 默认提交信息格式:`MMDD 日常更新`(如 `0716 日常更新`),日期用 `date +%m%d` 获取。
   - 如果用户调用时附加了参数(如 `/每日git提交 完善RAG切分逻辑`),则提交信息为 `MMDD <用户参数>`。

5. **推送**:运行 `git push origin <当前分支>`。
   - 本仓库 origin 配置了双推送地址(Gitee + GitHub),一次 push 会依次推送到两个平台,注意分别确认两个地址的推送结果。
   - 如果被拒绝(non-fast-forward):先 `git pull --rebase origin <当前分支>`,成功后重新推送;出现冲突则停止,列出冲突文件让用户处理。
   - 推送成功后,可再执行 `git push github <当前分支>` 兜底确认 GitHub 已同步(正常应显示 Everything up-to-date)。

6. **汇报**:用一两行总结:提交 hash、提交信息、Gitee 和 GitHub 是否都推送成功。

## 注意

- 不要使用 `--force` 推送。
- 不要修改 remote 配置。
- 如果当前在 `main`/`master` 之外的分支上,推送前先向用户确认是否推送该分支。
