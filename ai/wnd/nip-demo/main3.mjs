import { getCompletion } from "./completion.mjs";
async function main3() {
  const prod_review_zh = `
这个熊猫公仔是我给女儿的生日礼物，她很喜欢，去哪都带着。
公仔很软，超级可爱，面部表情也很和善。但是相比于价钱来说，
它有点小，我感觉在别的地方用同样的价钱能买到更大的。
快递比预期提前了一天到货，所以在送给女儿之前，我自己玩了会。
`
  //   const prompt = `
  // 你的任务是从电商网站上生成一个产品评论的简短摘要
  // 对三个反引号之间的文本进行总结，最多三十个词汇
  // 给定文本：\`\`\`${prod_review_zh}\`\`\`
  // `
  //   const response = await getCompletion(prompt);
  //   console.log(response);
  // }
  // 这个熊猫公仔软萌可爱，女儿很喜欢。但价格偏贵，尺寸较小。快递提前一天到。



  //   const prompt = `
  // 你的任务是从电商网站上生成一个产品评论的简短摘要
  // 对三个反引号之间的文本进行总结，最多三十个词汇
  // 并且聚焦在产品运输上
  // 给定文本：\`\`\`${prod_review_zh}\`\`\`
  // `
  //   const response = await getCompletion(prompt);
  //   console.log(response);
  // }
  // 快递比预期提前一天到货，包装完好，送达及时。



  const prompt = `
你的任务是从电商网站上生成一个产品评论的简短摘要
对三个反引号之间的文本进行总结，最多三十个词汇
并且聚焦在产品价格和质量上
给定文本：\`\`\`${prod_review_zh}\`\`\`
`
  const response = await getCompletion(prompt);
  console.log(response);
}

main3();
