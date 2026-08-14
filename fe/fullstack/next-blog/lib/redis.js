// node redis 客户端， 驱动
import Redis from 'ioredis';
const redis = new Redis();// 默认 NOSQL

// hash key 字符串ID，值是note的序列化字符串
// redis key：value value特别支持 hashlei'xleix
const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

export async function getAllNotes() {
  // 拿到的hash表 根据数据类型提供相应的方法
  const data = await redis.hgetall('notes');
  if (Object.keys(data).length === 0) {
    await redis.hset('notes', initialData);
  }
  return await redis.hgetall('notes');
}