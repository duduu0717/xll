## 远程MCP

MCP 本质上还是Tool，只不过还包了一层进程，可以通过stdio/http 跨进程通信

## 应用场景
高德地图， Chrome DevTool ，FileSystem结合起来

南昌（坐标点）附近的酒店，amap npx/http
交给chrome devtool 打开网页，把相关信息通过fileSystem 写入文件 npx

打造一个AI工作流

有了MCP协议后，有个巨大的好处
任何人都可以开发基于这个协议的MCP Server，然后可以直接复用

- 高德MCP，可以做位置查询，路线规划等
https://developer.amap.com/
- Chrome DevTool MCP，可以控制浏览器，打开关闭页面，点击元素，截图留下证据等
- FileSystem MCP，可以读写文件，创建目录等