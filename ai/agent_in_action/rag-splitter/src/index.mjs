import "dotenv/config";
import "cheerio";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
//从url 加载文档
import {
  // loader 按url 加载
  CheerioWebBaseLoader
} from '@langchain/community/document_loaders/web/cheerio'
// 访问网址 并提取文档内容
// cheerio 可以传递css 选择器 来提取文档内容 缩小范围
// 爬取指定内容 + Document 标准化
const cheerioLoader = new CheerioWebBaseLoader(
  'https://juejin.cn/post/7660707431753678854',
  {
    selector: '.main-area p' // 文章段落
  }
)
// 大的document -> 小的document 更加精细的控制,和处理语义
// 文档分割器 document splitter
// 按照段落分? 按语义分段,但是段落可能太长或者太短
// 分割目的是语义的精确化
// chunk大小
const documents = await cheerioLoader.load();
// console.log(documents)

// 切片
// 语义排第一
// 按大小来切割,chunkSize就够了
// 为了语义完整,少一点 chunkOverlap
// 递归尝试不同的分隔符,找到最优的分隔符,使每个chunk都有语义,并且chunk大小接近chunkSize
// 不完美的地方,直接硬切 chunkOverlap 补救
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 400,// 每个chunk大小 
  separators: ["。", "!", "?"],
  // 每个chunk 重叠的字符数
  chunkOverlap: 100,
})

const splitDocuments = await textSplitter.splitDocuments(documents)
console.log(splitDocuments)