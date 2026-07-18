# 手写文件处理mcp
- server fs 读取文件
 - schema 声明函数名字，参数传递一个地址
 - 接收返回内容，作为上下文返回给llm
- server 还要满足mcp协议

## 开发
- zod
数据验证 schema
- @modelcontextprotocol/sdk 协议的sdk 通信部分
在cc进行一个prompt -> llm分析 -> 选中fs client -> StdioServerTransport
-> stdin -> server ->执行返回 -> stdout -> StdioServerTransport -> cc -> llm -> generate