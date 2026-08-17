export interface Todo {
    id: number;
    title: string;
    complete: boolean;
}
export declare class TodosService {
    findAll(): Todo[];
}
