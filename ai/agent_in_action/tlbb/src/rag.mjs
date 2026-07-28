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

// 函数名可读性高
async function retrieveRelevantContent(question, k = 3) {
  try {
    const queryVector = await getEmbedding(question)
    const searchResult = await client.search({
      collection_name: COLLECTION_NAME,
      vector: queryVector,
      metric_type: MetricType.COSINE,
      limit: k,
      output_fields: ['id', 'book_id',
        'book_name', 'chapter_num',
        'index', 'content'],
    })
    return searchResult.results

  } catch (err) {
    console.log('检索相关内容失败:', err.message)
    return []
  }
}

async function answerEbookQuestion(question, k = 3) {
  try {
    const retrievedContent = await retrieveRelevantContent(question, k)
    if (retrievedContent.length === 0) {
      console.log('未检索到相关内容')
      return
    }
    const content = retrievedContent.map((item, i) => `
    [片段：${i + 1}] 
    章节：${item.chapter_num}
    内容：${item.content}
    `).join('\n\n---\n\n')

    const prompt = `
    你是一个专业的《天龙八部》的问答助手,基于小说回答问题,用准确详细的语言,根据
    以下小说片段内容回答问题：${content}
    用户问题：${question}
    回答要求
    1. 如果片段中有相关信息,请结合小说内容给出详细准确的回答没有就说不知道
    2. 可以综合多个片段的内容提供完整答案
    3. 如果片段中没有相关信息告知用户
    4. 回答要准确符合小说情节和人物设定
    5. 可以引用原文内容来支持你的回答
    AI助手回答:
    `
    const response = await model.invoke(prompt)
    console.log(response.content)
    return response.content

  } catch (err) {
    console.log(err.message)
  }
}


async function main() {
  try {
    await client.connectPromise
    try {
      await client.createCollection({
        collection_name: COLLECTION_NAME,
      })
      console.log('创建集合成功')
    } catch (err) {
      console.log(err.message)
    }
    const result = await answerEbookQuestion('鸠摩智的敌人', 5)
    console.log(result)

  } catch (err) {
    console.log(err.message)
  }
}

main()
  .catch(err => console.log(err.message))