import 'dotenv/config'
import {
  MilvusClient,// c/s架构
  MetricType,// 相似度的计算类型
  IndexType,// 索引类型
  DataType,// 字段数据类型约束
} from '@zilliz/milvus2-sdk-node'
import { OpenAIEmbeddings } from '@langchain/openai'

const ADDRESS = process.env.MILVUS_ADDRESS
const TOKEN = process.env.MILVUS_TOKEN

const COLLECTION_NAME = 'ebook'
const VECTOR_DIM = 1024

const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.EMBEDDING_MODEL_NAME,
  configuration: {
    baseURL: process.env.OPENAI_API_BASE_URL,
  },
  dimension: VECTOR_DIM,
})

const client = new MilvusClient({
  address: ADDRESS,
  token: TOKEN
})

const getEmbedding = async (text) => {
  const result = await embeddings.embedQuery(text)
  return result
}

async function main() {
  try {
    console.log('连接Milvus')
    await client.connectPromise
    console.log('连接Milvus成功')
    await client.loadCollection({
      collection_name: COLLECTION_NAME,
    })

    const query = '段誉会什么武功'
    const queryVector = await getEmbedding(query)
    const searchResult = await client.search({
      collection_name: COLLECTION_NAME,
      vector: queryVector,
      limit: 3,
      metric_type: MetricType.COSINE,
      output_fields: ['id', 'book_id',
        'book_name', 'chapter_num',
        'index', 'content'],
    })
    searchResult.results.forEach((item, index) => {
      console.log(`
    ${index + 1}.[Score: ${item.score.toFixed(4)}]\n
    ID: ${item.id}\n
    Book ID: ${item.book_id}\n
    Content: ${item.content}\n
    `)
    })

  } catch (err) {
    console.log('检索失败:', err.message)
  }
}
main()
  .catch(err => console.log(err.message))