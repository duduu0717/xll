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
  console.log('正在链接 zilliz')
  const checkHealth = await client.checkHealth()
  if (!checkHealth.isHealthy) {
    console.log('链接失败', checkHealth.reasons)
    return
  }
  console.log('链接成功，集群状态正常')

  await client.createCollection({
    collection_name: COLLECTION_NAME,
    fields: [
      // diary_01
      {
        name: 'id',
        data_type: DataType.VarChar,
        max_length: 50,
        is_primary_key: true
      },
      {
        name: 'vector',
        data_type: DataType.FloatVector,
        dim: VECTOR_DIM,
      },
      {
        name: 'content',
        data_type: DataType.VarChar,
        max_length: 5000,
      },
      {
        name: 'date',
        data_type: DataType.VarChar,
        max_length: 50,
      },
      {
        name: 'mood',
        data_type: DataType.VarChar,
        max_length: 50,
      },
      {
        name: 'tags',
        data_type: DataType.Array,
        element_type: DataType.VarChar,
        max_capacity: 10,
        max_length: 50,
      },
    ],

    dimension: VECTOR_DIM,
    auto_id: true,
  })
  console.log('创建集合成功')

  console.log('collection create success')
  console.log('create index ...')

  await client.createIndex({
    collection_name: COLLECTION_NAME,
    field_name: 'vector',
    index_type: IndexType.IVF_FLAT,
    metric_type: MetricType.COSINE,
  })

  console.log('loading collection')

  await client.loadCollection({
    collection_name: COLLECTION_NAME,
  })
  console.log('collection load success')

  const diaryContents = [
    {
      id: 'diary_001',
      content: '今天天气很好，去公园散步了，心情愉快。看到了很多花开了，春天真美好。',
      date: '2026-01-10',
      mood: 'happy',
      tags: ['生活', '散步']
    },
    {
      id: 'diary_002',
      content: '今天工作很忙，完成了一个重要的项目里程碑。团队合作很愉快，感觉很有成就感。',
      date: '2026-01-11',
      mood: 'excited',
      tags: ['工作', '成就']
    },
    {
      id: 'diary_003',
      content: '周末和朋友去爬山，天气很好，心情也很放松。享受大自然的感觉真好。',
      date: '2026-01-12',
      mood: 'relaxed',
      tags: ['户外', '朋友']
    },
    {
      id: 'diary_004',
      content: '今天学习了 Milvus 向量数据库，感觉很有意思。向量搜索技术真的很强大。',
      date: '2026-01-12',
      mood: 'curious',
      tags: ['学习', '技术']
    },
    {
      id: 'diary_005',
      content: '晚上做了一顿丰盛的晚餐，尝试了新菜谱。家人都说很好吃，很有成就感。',
      date: '2026-01-13',
      mood: 'proud',
      tags: ['美食', '家庭']
    },
    {
      id: 'diary_006',
      content: '今天布里茨江拜师谢哥,布里茨江是一个很有上进心的男人',
      date: '2026-01-14',
      mood: 'happy',
      tags: ['关系', '学习']
    }
  ];

  console.log('Generating embeddings ...')
  const diaryData = await Promise.all(
    diaryContents.map(async (diary) => ({
      ...diary,
      vector: await getEmbedding(diary.content),
    }))
  )
  console.log('embeddings generated success')

  const insertResult = await client.insert({
    collection_name: COLLECTION_NAME,
    data: diaryData,
  })
  console.log('insert data success')

}
main()
  .catch(console.error)

