// http请求llm接口
// bun代替npm 做包管理器
import axios, { HttpStatusCode } from 'axios';
import { version } from 'bun';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DEEPSEEK_BASE_URL);
async function chat() {
  // llm 可能会出错，异常
  // timeout network ，llm 忙 apiKey
  try {
    // GET请求有上限制
    // apiKey GET 不安全 明文
    // 图片 上传  post 请求体
    // 请求行 url,method,http version
    // 请求头 Authorization apiKey
    // 请求体 body
    // fetch http 请求api
    // axios http 请求的框架，封装了fetch，企业级别的
    const res = await axios.post(
      `${process.env.DEEPSEEK_API_URL}/chat/completions`,
      {
        model: 'deepseek-chat',
        messages: [{
          role: 'user',
          content: '你好,介绍一下bun'
        }]
      },
      {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`
        }
      }
    );
    // axios 默认会在响应前面带上data
    console.log(res.data.choices[0].message.content);
  } catch (err: any) {
    console.log(err.message);
  }
}
chat();