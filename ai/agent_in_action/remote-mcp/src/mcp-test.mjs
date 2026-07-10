import 'dotenv/config'
import { MultiServerMCPClient } from '@langchain/mcp-adapters'
import { ChatOpenAI } from '@langchain/openai'
import chalk from 'chalk'
import {
  HumanMessage,
  ToolMessage,
  SystemMessage,
} from '@langchain/core/messages'

const model = new ChatOpenAI({
  modelName: 'deepseek-v4-pro',
  apiKey: process.env.DEEPSEEK_API_KEY,
  temperature: 0,
  configuration: {
    baseURL: 'https://api.deepseek.com/v1',
  },
});

const mcpClient = new MultiServerMCPClient({
  mcpServers: {
    'amap-server': {
      "url": "https://mcp.amap.com/mcp?key=f58f8879063a5f61df94bbb40a6305cb"
    },

    'file-system': {
      command: 'npx',
      args: [
        '-y',
        '@modelcontextprotocol/server-filesystem',
        // 允许访问的文件夹，可以配置多个，用空格隔开
        'C:\\Users\\rog\\Desktop\\work space\\xll_ai\\ai\\agent_in_action\\remote-mcp\\src'
      ]
    },

    'chrome-devtools': {
      command: 'npx',
      args: [
        '-y',
        'chrome-devtools-mcp@latest',
      ]
    }
  }
})

const tools = await mcpClient.getTools()
console.log(tools)
const modelWithTools = model.bindTools(tools)

async function runAgentWithTools(query, maxIterations = 30) {
  const messages = [
    new SystemMessage(`当前工作目录：C:\\Users\\rog\\Desktop\\work space\\xll_ai\\ai\\agent_in_action\\remote-mcp\\src
所有文件操作（读写保存）必须在这个目录下进行，不要使用其他路径。`),
    new HumanMessage(query),
  ]
  for (let i = 0; i < maxIterations; i++) {
    console.log(chalk.bgGreen(`AI第${i}思考`))
    const response = await modelWithTools.invoke(messages)
    messages.push(response)

    if (!response.tool_calls || response.tool_calls.length === 0) {
      console.log(chalk.green(`AI回答：${response.content}`))
      return response.content

    }
    console.log(chalk.bgBlue(`AI调用工具：${response.tool_calls.map(t => t.name).join(', ')}`))
    for (const tool_call of response.tool_calls) {
      const foundTool = tools.find(t => t.name === tool_call.name)
      if (foundTool) {
        const toolResult = await foundTool.invoke(tool_call.args)
        let contentStr
        // mcp tool 返回的 content 通常是数组 [{type:'text', text:'...'}]
        // 也可能直接是字符串

        if (typeof toolResult === 'string') {
          contentStr = toolResult
        } else if (Array.isArray(toolResult.content)) {
          contentStr = toolResult.content.map(c => c.text || '').join('\n')
        } else if (typeof toolResult.content === 'string') {
          contentStr = toolResult.content
        } else {
          contentStr = JSON.stringify(toolResult)
        }
        messages.push(new ToolMessage({
          content: contentStr,
          tool_call_id: tool_call.id,
        }

        ))
      }
    }
  }
  // 最后一个消息是AI回复
  // 方便改进
  return messages[messages.length - 1].content
}

await runAgentWithTools(`抚州东华理工大学附近学生最爱酒店，最近的 3 个酒店，拿到酒店图片，打开浏览器，展示每个酒店的图片，每个 tab 一个 url 展示，并且在把那个页面标题改为酒店名`)
await client.close()

