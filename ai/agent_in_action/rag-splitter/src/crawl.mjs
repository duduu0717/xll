// 网页爬虫,并且解析其中指定部分,css 选择器
import axios from 'axios'// 标准http 请求库,向url 发送http请求
// esm export default一个 export很多
// *as 都引入
import * as cheerio from 'cheerio'
// html 字符串
// text/html 的html document文本

// 去拿其中的一部分,cheerio适合的,在内存中,把html字符串解析为dom树对象
// dom 关键? 前端 cheerio
// 怎么样把html字符串 -> dom树 -> css selector 入参 -> 树的遍历 -> 节点返回

const targetUrl = 'https://juejin.cn/post/7660707431753678854'

async function crawlPage() {
  try {
    const { data: html } = await axios.get(targetUrl)
    console.log(html)// html 字符串
    // 1. html字符串在命令行运行,内存中虚拟化一个DOM对象
    // 2. DOM对象就是树状结构,申请分配比较大的内存空间
    // 3. css selector 在树里面查找
    // 4. cheerio 可以让js开发者,以前端思维,简单高效的完成指定url,指定部分的爬取工作,不需要正则
    const $ = cheerio.load(html)// cheerio 解析 HTML，内存中生成 DOM 树，$ 是操作这棵树的查询函数 
    const pageContent = $('.main-area p').text()
    console.log(pageContent)

  }
  catch (e) {

  }
}
crawlPage()