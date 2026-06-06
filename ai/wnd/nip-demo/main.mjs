// // 主程序文件
// // 多个默认的输出
// import client from './client.mjs'
// console.log(client)
// // let { name, age } = { "name": "詹姆斯", "age": 30 }
// // console.log(name)
// // console.log(age)


// let obj = { "name": "姚明", "city": "北京" }
// // let name = obj.name
// // console.log(name)  //姚明，少打obj.
// // obj.name = '易建联' 重新赋值
// // console.log(name)  //还是姚明（赋值时已经存好原值）
// // console.log(obj.name) // 易建联

// //es6 让js成为大型项目企业级开发语言
// // 解构赋值 代码优雅简洁,性能好
// let { name, city } = obj
// console.log(name)
// console.log(city)
// // 等价于
// // let name = obj.name
// // let city = obj.city


// // 数组解构赋值,按顺序结构,rest运算符
// let [coach, ...players] = ['范甘迪', '姚明', '麦迪', '穆托姆博', '弗朗西斯'];
// console.log(coach)    // 范甘迪
// console.log(players) // ["姚明","麦迪","穆托姆博","弗朗西斯"]
// // coach 取第一个元素：'范甘迪'
// // ...players：剩下所有元素打包成新数组
// let [hrcoach, ...hrplayers] = ['杰克逊', '科比', '费舍尔', '加索尔'];
// let allPlayers = [...players, ...hrplayers]
// console.log(allPlayers)


import { getCompletion } from "./completion.mjs";

async function main() {
  const story_zh = `
    在政府最近进行的一项调查中，要求公共部门的员工对他们所在部门的满意度进行评分。
    调查结果显示，NASA 是最受欢迎的部门，满意度为 95％。

    一位 NASA 员工 John Smith 对这一发现发表了评论，他表示：
    "我对 NASA 排名第一并不感到惊讶。这是一个与了不起的人们和令人难以置信的机会共事的好地方。我为成为这样一个创新组织的一员感到自豪。"

    NASA 的管理团队也对这一结果表示欢迎，主管 Tom Johnson 表示：
    "我们很高兴听到我们的员工对 NASA 的工作感到满意。
    我们拥有一支才华横溢、忠诚敬业的团队，他们为实现我们的目标不懈努力，看到他们的辛勤工作得到回报是太棒了。"

    调查还显示，社会保障管理局的满意度最低，只有 45％的员工表示他们对工作满意。
    政府承诺解决调查中员工提出的问题，并努力提高所有部门的工作满意度。
  `;

  const prompt = `
    确定一下给定文本中讨论的五个主题
    每个主题用一到两个单词概括
    输出时用逗号分隔
    文本：\`\`\`${story_zh}\`\`\`
  `;

  const response = await getCompletion(prompt);
  console.log(response);
}

main();