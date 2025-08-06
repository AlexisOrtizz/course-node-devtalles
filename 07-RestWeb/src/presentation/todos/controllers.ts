import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';


export class TodosController {

  constructor() { }

  public async getTodos(req: Request, res: Response) {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  }

  public async getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id)) {
      res.status(404).json({ error: 'Argument is not a number.' });
      return;
    }

    const todo = await prisma.todo.findFirst({
      where: { id }
    });

    if( !todo ) {
      res.status(404).json({ error: `Todo with id ${id} not found.` });
      return;
    }
    res.json(todo);
  }

  public async createTodo(req: Request, res: Response) {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);

    if( error ) {
      res.status(400).json({ error });
      return;
    }

    const todo = await prisma.todo.create({
      data: createTodoDto!
    });

    res.status(201).json(todo);
  }

  public async updateTodo(req: Request, res: Response) {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });

    if ( error ) {
      res.status(400).json({ error });
      return;
    }

    const todo = await prisma.todo.findFirst({
      where: { id }
    });

    if( !todo ) {
      res.status(404).json({ error: `Todo with id ${id} not found.` });
      return;
    }

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: updateTodoDto!.values
    });

    res.json(updatedTodo);
  }

  public async deleteTodo(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id)) {
      res.status(404).json({ error: 'ID argument is not a number.' });
      return;
    }

    const todo = await prisma.todo.findFirst({
      where: { id }
    });

    if( !todo ) {
      res.status(404).json({ error: `Todo with id ${id} not found.` });
      return;
    }

    const deletedTodo = await prisma.todo.delete({
      where: { id }
    });

    if ( deletedTodo ) {
      res.status(204).json( deletedTodo );
    } else {
      res.status(400).json({ error: `Todo with id ${id} not found.` });
    }
  }
}