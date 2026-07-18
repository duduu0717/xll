// posts.json 向量化
// node 内置的fs模块 读取文件到内存
// JSON.parse() 每一项 await embedding 加到json数组中
// 写入文件 embedding 长期存储
// 09年 node出圈了 2015年 ES6 支持promise的fs模块
import fs from 'fs/promises';//支持promise的fs模块
import { client } from './app.service.mjs';

const inputFilePath = 'data/posts.json';
const outputFilePath = 'data/post-embeddings.json';
//node 新版 全局直接await
//I/O操作 硬盘到内存
//文件二进制文本
const data = await fs.readFile(inputFilePath, 'utf-8');
console.log(data);
const posts = JSON.parse(data);
console.log(posts[0]);
const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));
const postsWithEmbeddings = [];
//提升代码可读性
for (const { title, category } of posts) {
  console.log(title, category, 'embedding');
  const response = await client.embeddings.create({
    model: 'text-embedding-v4',
    //语义更准确，可以细致的语义匹配
    input: `${title} ${category}`
  });
  postsWithEmbeddings.push({
    title,
    category,
    embedding: response.data[0].embedding
  });
  await sleep(200);
}
console.log('成功写入文件');
await fs.writeFile(
  outputFilePath, JSON.stringify(postsWithEmbeddings, null, 2));
