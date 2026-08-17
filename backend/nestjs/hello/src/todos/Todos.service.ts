import {
  Injectable // 可以被自动注入
} from '@nestjs/common'

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}
let todos: Todo[] = [
  { id: 1, title: '学习 NestJS', complete: false },
  { id: 2, title: '学习 CRUD', complete: true },
]

@Injectable()
export class TodosService {
  findAll(): Todo[] {
    return todos
  }
}