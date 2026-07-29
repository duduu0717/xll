import "dotenv/config"
import { parse } from "path"// 解析路径
import {
  MilvusClient,
  DataType,
  MetricType,
  IndexType,
} from '@zilliz/milvus2-sdk-node'

import {
  OpenAIEmbeddings
} from '@langchain/openai'

import {
  EPubLoader
} from '@langchain/community/document_loaders/fs/epub'

import {
  RecursiveCharacterTextSplitter
} from '@langchain/textsplitters'

const COLLECTION_NAME = 'ebook'// 编程习惯
const VECTOR_DIM = 1024
const CHUNK_SIZE = 500
const EPUB_PATH = '../天龙八部.epub'

// const BOOK_NAME = parse(EPUB_PATH).name
const { name: BOOK_NAME } = parse(EPUB_PATH)// 解构赋值
console.log(BOOK_NAME)

const ADDRESS = process.env.MILVUS_ADDRESS
const TOKEN = process.env.MILVUS_TOKEN

// 初始化embeddings模型
const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.EMBEDDING_MODEL_NAME,
  configuration: {
    baseURL: process.env.OPENAI_BASE_URL,
  },
  dimension: VECTOR_DIM,
})

async function getEmbedding(text) {
  const result = await embeddings.embedQuery(text)
  return result
}

// 向量数据库的初始化
const client = new MilvusClient({
  address: ADDRESS,
  token: TOKEN,
})

// 没有集合就创建，有就忽略
async function ensureCollection(bookID) {
  try {
    const hasCollection = await client.hasCollection({
      collection_name: COLLECTION_NAME,
    })
    if (!hasCollection.value) {
      console.log('创建集合中...')
      await client.createCollection({
        collection_name: COLLECTION_NAME,
        fields: [
          {
            name: 'id',
            data_type: DataType.VarChar,
            max_length: 100,
            is_primary_key: true,
          },
          {
            name: 'book_id',
            data_type: DataType.VarChar,
            max_length: 100,
          },
          {
            name: 'book_name',
            data_type: DataType.VarChar,
            max_length: 200,
          },
          {
            name: 'chapter_num',
            data_type: DataType.Int32,
          },
          {
            name: 'index',
            data_type: DataType.Int32,
            max_length: 100,
          },
          {
            name: 'content',
            data_type: DataType.VarChar,
            max_length: 10000,
          },
          {
            name: 'vector',
            data_type: DataType.FloatVector,
            dim: VECTOR_DIM,
          }
        ]
      })
      console.log('集合创建成功')
      console.log('创建索引...')

      await client.createIndex({
        collection_name: COLLECTION_NAME,
        field_name: 'vector',
        index_type: IndexType.IVF_FLAT,
        // cosine高维计算相似度，速度不慢，但是数据量大
        metric_type: MetricType.COSINE,
        // nlist 是索引的聚类数量
        params: { nlist: 1024 }
      })
      console.log('索引创建成功')
    }

  } catch (err) {
    console.log('集合创建集合失败')
  }
}

async function loadAndProcessEPubStreaming(bookID) {
  try {
    console.log(`开始加载EPUB文件:${EPUB_PATH}`)
    const loader = new EPubLoader(EPUB_PATH, {
      // 加载时按章节生成多个document
      splitChapters: true,
    })
    const documents = await loader.load()
    console.log(`EPUB文件加载成功,共${documents.length}个章节文档`)

    // 文本分割器
    const textSplitter = new RecursiveCharacterTextSplitter({
      // 默认没有传separator，使用默认分隔符
      chunkSize: CHUNK_SIZE,
      chunkOverlap: 50,
    })
    let totalInsertCount = 0// 计数器
    let documentsLength = documents.length// 缓存

    for (let chapterIndex = 0;
      chapterIndex < documentsLength;
      chapterIndex++) {
      const chapter = documents[chapterIndex]
      const chapterContent = chapter.pageContent
      console.log(`处理第${chapterIndex + 1}/${documentsLength}章`)
      const chunks = await textSplitter.splitText(chapterContent)
      console.log(`拆分为${chunks.length}个chunk`)
      if (chunks.length === 0) {
        console.log(`跳过空章节\n`)
        continue
      }
      console.log(`生成向量并且插入数据库中...`)

      const insertCount = await insertChunksBatch(
        chunks,
        bookID,
        chapterIndex + 1
      )
      totalInsertCount += insertCount
    }
    console.log(`共插入${totalInsertCount}个chunk向量`)
    return totalInsertCount
  } catch (err) {
    console.log('EPUB加载失败:', err)
  }
}

// 将一批chunk 插入向量数据库
async function insertChunksBatch(chunks, bookID, chapterNum) {
  try {
    if (chunks.length === 0) {
      return 0
    }

    // 生成插入数据
    const insertData = await Promise.all(
      chunks.map(async (chunk, chunkIndex) => {
        const vector = await getEmbedding(chunk)
        return {
          id: `${bookID}_${chapterNum}_${chunkIndex}`,
          book_id: bookID,
          book_name: BOOK_NAME,
          chapter_num: chapterNum,
          index: chunkIndex,
          content: chunk,
          vector,
        }
      })
    )

    // 插入数据
    const insertResult = await client.insert({
      collection_name: COLLECTION_NAME,
      data: insertData,
    })
    // 函数返回的结果要有预测性，一致性
    return Number(insertResult.inserted_cnt) || 0
  } catch (err) {
    console.log(`插入章节${chapterNum}失败:`, err.message)
    throw err
  }
}


const main = async () => {
  try {
    console.log('='.repeat(80))
    console.log('电子书开始处理')
    console.log('='.repeat(80))
    console.log('\n连接Milvus数据库...')
    await client.connectPromise
    console.log('连接Milvus数据库成功')
    const bookID = 1
    // 确保集合建立
    await ensureCollection(bookID)
    // 细节捕捉错误
    await client.loadCollection({
      collection_name: COLLECTION_NAME,
    })
    console.log('集合加载成功')
    // 加载和处理EPUB文件
    // 一边切割一边Embedding，一边插入数据库
    await loadAndProcessEPubStreaming(bookID)
  } catch (err) {

  }
}

main()
  .catch(err => {
    console.log(err)
  }) 