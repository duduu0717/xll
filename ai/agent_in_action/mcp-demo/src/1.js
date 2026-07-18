const obj = {
  'bytedance': ['AI全栈', 'AI前端', 'AI后端'],
  'tencent': ['后端', 'AI前端'],
  '163': ['AI全栈', 'AI前端', 'AI后端'],
}

for (const key in obj) {
  console.log(key, obj[key]);
}
// 二维数组
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
