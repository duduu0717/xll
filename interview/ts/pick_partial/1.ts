interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
// 有什么特性 一个类型挑选一些你需要的字段，形成新的类型？
// 负责项目， 区分度 
// 大型项目类型消费比较多
type UserPreview = Pick<User, 'id' | 'name'>;
const u: UserPreview = {
  id: 1,
  name: '祖豪',
}

// Omit 去掉部分字段
type UserSafe = Omit<User, 'email'>;

const safeUser: UserSafe = {
  id: 2,
  name: '戴',
  age: 30,
}
// 所有字段全部变成可选
type PartialUser = Partial<User>;
// patch 修改 对象属性很多， 
const patchUser: PartialUser = {
  name: '明明',
  age: 18
}
const emptyObj: PartialUser = {};
// json key:value Record<键类型, 值类型>
type Dict = Record<string, number>;
const obj: Dict = { a: 1, b: 2 };
type ErrorMsgMap = Record<number, string>;
// http status code
// 1XX 执行中 
// 2XX 成功
// 3XX 要跳转
// 4XX 用户错误
// 5XX 服务器端错误
const errorMessage: ErrorMsgMap = {
  400: '请求参数错误',
  401: '未登录，请重新登录',
  403: '权限不足, 禁止访问',
  404: "资源找不到",
  500: "服务器内部错误"
}

function getErrMsg(code: number): string {
  return errorMessage[code] ?? "未知错误"
}

function fn() { return { x: 1, y: 2 } };
type fnReturn = ReturnType<typeof fn>;
// 联合类型
type All = "id" | "name" | "age" | "email"
type AfterExclude = Exclude<All, "email">;
// Omit ? Exclude 处理联合类型，  Omit 处理对象接口