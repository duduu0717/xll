# prompt 在NPL中的应用

自然语言处理 NPL

## 情感推断与信息提取

## 图片生成
-text generation 到 image generation
 多模态 
-openai sdk 换成了fetch请求
 -本质都是向llm 远程服务器发送http请求
 -url 地址
 -配置一个请求对象
   -method POST请求比GET请求更安全
   -headers 请求头指定apikey
     -Authorization 权限
   -body 请求体
     message
     多张图片和文字指令


