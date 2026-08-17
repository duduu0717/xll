import { TodosService } from './Todos.service';
import { type Todo } from './Todos.service';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): Todo[];
}
