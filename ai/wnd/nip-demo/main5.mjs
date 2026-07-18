// 1
// const prompt = `
// 将以下中文翻译为西班牙语：
// \`\`\`你好，我想买一个搅拌机\`\`\`
// `
// const res = await getCompletion(prompt)
// console.log(res)

// 2
// const prompt = `
// 请告诉我以下文本是什么语种：
// \`\`\`I want to buy a mixer\`\`\`
// `
// const res = await getCompletion(prompt)
// console.log(res)

// 3
// const prompt = `
// 请告诉我以下文本翻译成中文，英文，法语：
// \`\`\`你好，我是吴贤宏\`\`\`
// `
// const res = await getCompletion(prompt)
// console.log(res)

// 4 语气转换 书面口语化一些
// const prompt = `
// 请将以下文本翻译为中文，分别展示正式与非正式的版本：
// \`\`\`would you like to buy a mixer?\`\`\`
// `
// const res = await getCompletion(prompt)
// console.log(res)

// 5 通用翻译器
const user_messages = [
  "La performance du système est plus lente que d'habitude.",  // System performance is slower than normal         
  "Mi monitor tiene píxeles que no se iluminan.",              // My monitor has pixels that are not lighting
  "Il mio mouse non funziona",                                 // My mouse is not working
  "Mój klawisz Ctrl jest zepsuty",                             // My keyboard has a broken control key
  "我的屏幕在闪烁"                                             // My screen is flashing
];
for (let message of user_messages) {
  await sleep(2000);
  const prompt = `
        请告诉我以下文本是什么语种，直接输出语种，无需其他标点符号: 
        \`\`\`${message}\`\`\`
        `
  const res = await getCompletion(prompt);
  console.log(res, "\n");
  const prompt2 = `
        请将以下消息分别翻译成中文和英文，并且写成
        中文翻译: 
        英文翻译: 
        的格式
        \`\`\`${message}\`\`\`
        `
  const res2 = await getCompletion(prompt2);
  console.log(res2, "\n");
}