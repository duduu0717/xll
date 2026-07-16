import "dotenv/config";
import "cheerio";
//从url 加载文档
import {
  CheerioWebBaseLoader
} from '@langchain/community/document_loaders/web/cheerio'
// 访问网址 并提取文档内容
// cheerio 可以传递css 选择器 来提取文档内容 缩小范围
const cheerioLoader = new CheerioWebBaseLoader(
  'https://juejin.cn/post/7660707431753678854',
  {
    selector: '.main-area p' // 文章段落
  }
)
const documents = await cheerioLoader.load();
console.log(documents)