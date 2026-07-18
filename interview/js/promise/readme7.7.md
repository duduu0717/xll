# Promise

## 一、Promise 的本质：一个"未来结果"的容器

- `new Promise((resolve, reject) => { ... })` — make a promise
- Promise 有三种状态：
  - `pending` — 待处理
  - `fulfilled` — 已完成
  - `rejected` — 已拒绝

**关键认知**：只要执行 `fetch(xxx)`，请求**瞬间发起**，Promise 只是用来「接收未来异步结果」的容器。不是 Promise 发起了请求，而是 `fetch()` 发起了请求，Promise 负责把结果"装"起来给你。

```js
// 代码段①：fetch 调用即发起请求，返回的 Promise 是容器
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris')
console.log(streetCarsPromise); // Promise {<pending>} — 请求已发出，等结果中
```

## 二、串行 vs 并发：Promise.all 的威力

### 2.1 串行执行（有性能浪费）

```js
// 代码段②：一个接一个等 getRatp 要等 getStory 完成才发起
const story = await getStory()   // 先等这个
const rate = await getRatp()     // 再等那个
// 总耗时 ≈ 请求A耗时 + 请求B耗时（白白多等）
```

两个请求之间**没有依赖关系**，串行就是浪费时间。

### 2.2 Promise.all —— 并发执行

```js
// 代码段②：两个请求同时发出，等最慢的那个完成
const res = await Promise.all([getStory(), getRatp()])
```

- **参数**：Promise 数组（注意是数组，`[]`）
- **执行**：所有 Promise 并发执行（同时发出），不等彼此
- **结果顺序**：不管谁先执行完，resolve 的结果**严格按数组传入顺序**返回
- **总耗时** ≈ 最慢的那个请求的耗时

```js
// 后续 .json() 也返回 Promise，所以还需要再包一层 Promise.all
const jsonPromise = res.map(item => item.json())   // 得到的是 Promise[] 数组
const result = await Promise.all(jsonPromise)       // 并发解析所有 JSON
console.log(result)
```

**核心要点**：`response.json()` 返回的也是 Promise（解析响应体是异步的），所以要用 `Promise.all` 再包一层来并发等待所有解析完成。



### 3.2 Promise.all 的失败：一票否决

```js
// 只要有一个 reject，整个 Promise.all 立刻 reject
await Promise.all([p1, p2, p3])
// p1 成功，p2 失败 → 立即抛错，p3 结果直接丢弃
```

**缺点**：一个挂了全挂，其他成功的也被丢弃。