import OpenAI from 'openai';
import dotenv from 'dotenv';
import { APIPromise } from 'openai/index.js';
dotenv.config();
//模块化输出 client复用
// app.service.mjs 大型项目风骨 app应用 service获取llm服务
export const client = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
})

