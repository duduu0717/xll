interface User {
  name: string;
  age: number;
  avatarUrl: string;
}

type UserType = {
  name: string;
  age: number;
  avatarUrl: string;
}

const u1: User = {
  name: 'a',
  age: 18,
  avatarUrl: 'https://example.com/avatar.jpg',
}

const u2: UserType = {
  name: 'b',
  age: 20,
  avatarUrl: 'https://example.com/avatar.jpg',
}

// 继承
interface Person {
  name: string;
}

// 接口不从0开始，继承person接口
interface Employee extends Person {
  job: string
}

type PersonType = { name: string }
type EmployeeType = PersonType & { job: string }

const e1: Employee = { name: '谢哥', job: '字节' }
const e2: EmployeeType = { name: '谢哥真的帅', job: '腾讯' }