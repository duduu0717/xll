import {
  MilvusClient,  // client 链接 zilliz server 的客户端
  IndexType,     // 索引类型
  MetricType,    // 相似度的计算类型
  // Milvus 存的是高维向量，没有索引时，每次查询都要把库里的向量和查询的向量逐一计算相似度
  // 数据量大时，就没法使用
  // 有索引，迅速减少查询范围
  // IVF_FLAT 聚簇索引
  // metric_type: MetricType.COSINE, // 余弦相似度
  // metric_type: MetricType.L2, // L2 距离
} from '@zilliz/milvus2-sdk-node'
import 'dotenv/config'

// 云端地址
const ADDRESS = process.env.MILVUS_ADDRESS
// api key 
const TOKEN = process.env.MILVUS_TOKEN

async function main() {
  const client = new MilvusClient({
    address: ADDRESS,
    token: TOKEN
  })
  console.log('正在链接 zilliz cloud ...')

  const checkHealth = await client.checkHealth()
  if (!checkHealth.isHealthy) {
    console.log('链接失败', checkHealth.reasons)
    return
  }
  console.log('链接成功，集群状态正常')

  // 在mysql里面叫table表，在milvus里面叫collection集合
  const COLLECTION_NAME = 'test'
  const DIMENSION = 4 // 维度


  try {
    await client.createCollection({
      collection_name: COLLECTION_NAME,
      dimension: DIMENSION,
      auto_id: true, // 自动创建id
    })
    console.log('创建集合成功')

    // 创建索引 让查询更快
    await client.createIndex({
      collection_name: COLLECTION_NAME,
      field_name: 'vector',// 给某字段创建索引
      index_type: IndexType.AUTOINDEX,
      metric_type: MetricType.COSINE,
    })
    console.log('创建索引成功')

    const data = [
      // rows fields
      // 相比于mysql宽松一些，可以在插入数据时建立字段
      { vector: [0.1, 0.2, 0.3, 0.4], content: "这是第一条数据" },
      { vector: [0.5, 0.6, 0.7, 0.8], content: "这是第二条数据" },
    ]
    const insertRes = await client.insert({
      collection_name: COLLECTION_NAME,
      data,// 太简单了，不用写sql
    })
    console.log('插入数据成功', insertRes.IDs)
    const searchRes = await client.search({
      collection_name: COLLECTION_NAME,
      data: [[0.5, 0.6, 0.7, 0.8]],
      limit: 2,
      output_fields: ['vector', 'content'],
    })
    console.log('查询结果', JSON.stringify(searchRes.results, null, 2))

  } catch (err) {
    console.log('创建集合或索引失败', err.message)
    return
  }
}
main()
  .catch(console.error)