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

const COLLECTION_NAME = 'AI_Dairy'
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
    console.log('Connecting to Milvus...')
    await client.connectPromise// 先连接Milvus
    console.log('Connected')

    const query = '我想看看关于拜师学习的日记'
    console.log(`Query: ${query}`)
    const queryVector = await getEmbedding(query)
    const searchResult = await client.search({
      collection_name: COLLECTION_NAME,
      data: [queryVector],
      limit: 2,
      metric_type: MetricType.COSINE,
      output_fields: ['id', 'content', 'date', 'mood', 'tags'],
    })
    console.log(`找到了${searchResult.results.length}条日记`)
    searchResult.results.forEach((item, index) => {
      console.log(`第${index + 1}条日记 [score: ${item.score.toFixed(4)}]`)
      console.log(
        `
        id: ${item.id}
        content: ${item.content}
        date: ${item.date}
        mood: ${item.mood}
        tags: ${item.tags?.join(', ')} 
        `
      )

    })

  }
  catch (error) {
    console.error('Error connecting to Milvus:', error)
  }
}
main()
  .catch(console.error)
