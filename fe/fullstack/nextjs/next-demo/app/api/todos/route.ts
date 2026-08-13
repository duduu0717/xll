// nextjs 除了 use client 都是属于后端
// /api 数据接口 任然满足app router 约定
// route.ts 返回的是json数据 page返回的是html

import { type Todo } from '../../todos/types';

let todos: Todo[] = [
  { id: 1, content: '学习App Router', completed: true, }
  ,
  { id: 2, content: '学习Next.js', completed: false, }
];

// /api/todos get请求 restful
export async function GET() {
  //返回json数据接口，nextjs封装好了 Response 类
  return Response.json(todos);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newTodo: Todo = {
    id: Date.now(),
    content: body.content,
    completed: false,
  }
  todos.push(newTodo);
  return Response.json(newTodo);
}