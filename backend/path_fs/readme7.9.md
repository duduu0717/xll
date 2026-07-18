- path.join & path.resolve
都可以拼接路径
- 区别
 - resolve 将多个路径拼接成一个绝对路径，返回一个**解析**后的绝对路径
 如果传入了相对路径，会以当前工作目录为基准，计算绝对路径，如果传入了绝对路径，则以传入的绝对路径为准

 - join 将多个路径拼接成一个相对路径

当第一个参数都是绝对路径时，resolve和join的结果是一致的
如果是相对路径，resolve会以当前工作目录为基准，计算绝对路径，而join会直接拼接路径

工程化思维，根目录，开发代码目录src，静态资源目录/src/assets，工具函数目录/src/libs


- path.dirname 获取路径的目录名
- path.basename 获取路径的文件名，并可选的去除给定的文件扩展名
- path.extname 获取文件扩展名
- path.normalize 规范化路径
