import { CreateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface GetTodosUseCase {
  execute(): Promise<TodoEntity[]>;
}

export class GetTodos implements GetTodosUseCase {

  constructor(
    private readonly respository: TodoRepository,
  ) {}

  execute(): Promise<TodoEntity[]> {
    return this.respository.getAll();
  }
  
}