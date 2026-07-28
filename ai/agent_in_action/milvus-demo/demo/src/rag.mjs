import 'dotenv/config'
import {
  MilvusClient,// c/s架构
  MetricType,// 相似度的计算类型
} from '@zilliz/milvus2-sdk-node'
import {
  OpenAIEmbeddings,
  ChatOpenAI
} from '@langchain/openai'

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

const model = new ChatOpenAI({
  temperature: 0.1,
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.MODEL_NAME,
  configuration: {
    baseURL: process.env.OPENAI_API_BASE_URL,
  },
})

const getEmbedding = async (text) => {
  const result = await embeddings.embedQuery(text)
  return result
}

async function retrieveRelevantDiaries(question, k = 2) {
  try {
    const queryVector = await getEmbedding(question)
    const searchResult = await client.search({
      collection_name: COLLECTION_NAME,
      data: [queryVector],
      limit: k,
      metric_type: MetricType.COSINE,
      output_fields: ['id', 'content', 'date', 'mood', 'tags'],
    })
    return searchResult.results
  } catch (error) {
    console.error('检索相关日记失败:', error.message)
    return []
  }
}

async function answerDiaryQuestion(question, k = 2) {
  try {
    console.log('='.repeat(80))
    console.log(`question: ${question}`)
    console.log('='.repeat(80))
    // r a g 模块化
    console.log('检索相关日记')
    const retrieverDiaries = await retrieveRelevantDiaries(question, k)
    if (retrieverDiaries.length === 0) {
      console.log('没有找到相关日记')
      return
    }
    retrieverDiaries.forEach((diary, i) => {
      console.log(`相关日记${i + 1}相似度：${diary.score.toFixed(4)}\n
      内容：${diary.content}`)
    })

    const content = retrieverDiaries.map((diary, i) => `
    [日记${i + 1}]
    日期：${diary.date}
    心情：${diary.mood}
    标签：${diary.tags?.join(',')}
    内容:${diary.content}
`).join('\n\n-----\n\n')

    const prompt = `你是一个温暖贴心的AI日记助手,基于用户的日记回答问题,用亲切自然的语言,请根据以下日记
内容回答问题：
${content}
用户问题：
${question}
回答要求：
1.如果日记中有相关信息请结合日记内容给出详细温暖的回答
2.可以总结多篇日记内容,找出共同点或者趋势
3.如果日记中没有相关信息,请温和告知用户
4.用第一人称"你"来称呼日记的作者
5.回答要有同理心,让用户感到被理解关心
AI助手的回答:
`
    console.log('[AI回答]')
    const response = await model.invoke(prompt)
    console.log(response.content)
  } catch (error) {
    console.log(error.message)
  }
}

async function main() {
  try {
    console.log('connect to milvus ...')
    await client.connectPromise// 先连接，先握手
    console.log('connect to milvus success')
    await answerDiaryQuestion('我最近做了拜师的事情', 2)
  } catch (error) {
  }
}
main()
  .catch(console.error)
