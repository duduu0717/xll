import {
  Controller,
  Get
} from '@nestjs/common';
import { TodosService } from './Todos.service';
import { type Todo } from './Todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }
  @Get()
  findAll(): Todo[] {
    // /todos
    console.log('/todos controller');
    // 怎么找到service? import  new 实例化 
    return this.todosService.findAll();
  }
}