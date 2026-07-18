import { getCompletion } from "./completion.mjs";
async function main2() {
  const story_zh = `
  在政府最近进行的一项调查中，要求公共部门的员工对他们所在部门的满意度进行评分。
调查结果显示，NASA 是最受欢迎的部门，满意度为 95％。

一位 NASA 员工 John Smith 对这一发现发表了评论，他表示：
“我对 NASA 排名第一并不感到惊讶。这是一个与了不起的人们和令人难以置信的机会共事的好地方。我为成为这样一个创新组织的一员感到自豪。”

NASA 的管理团队也对这一结果表示欢迎，主管 Tom Johnson 表示：
“我们很高兴听到我们的员工对 NASA 的工作感到满意。
我们拥有一支才华横溢、忠诚敬业的团队，他们为实现我们的目标不懈努力，看到他们的辛勤工作得到回报是太棒了。”

调查还显示，社会保障管理局的满意度最低，只有 45％的员工表示他们对工作满意。
政府承诺解决调查中员工提出的问题，并努力提高所有部门的工作满意度。
  `
  const topicList = [
    '美国国家航天局', '地方政府', '工程',
    '员工满意度', '联邦政府'
  ]
  const prompt = `
    判断主题列表中的每一项是否是给定文本中的一个话题
    以列表的形式给出答案，每个主题用0或1。
    主题列表：${topicList.join(",")}
    给定文本：${story_zh}
    `
  const response = await getCompletion(prompt);
  console.log(response);
}
main2();