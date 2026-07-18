import { ChatOpenAI } from '@langchain/openai';
import 'dotenv/config';
const model = new ChatOpenAI({
  modelName: 'deepseek-v4-flash',
  apiKey: process.env.DEEPSEEK_API_KEY,
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',
  },
});
// client.chat.completions.create

const response =
  await model.invoke('谢鲁立为什么比吴贤宏帅');
console.log(response.content);
